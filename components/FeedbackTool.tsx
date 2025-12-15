import React, { useState, useRef, useEffect } from "react";
import { 
  MessageSquare, 
  Square, 
  Circle, 
  X, 
  Check, 
  MousePointer2, 
  Trash2, 
  Eye, 
  EyeOff,
  PenTool
} from "lucide-react";
import { Button } from "./ui/button";

interface Annotation {
  id: string;
  type: "rect" | "circle";
  x: number;
  y: number;
  width?: number; // for rect
  height?: number; // for rect
  radius?: number; // for circle
  text: string;
  timestamp: Date;
}

const FeedbackTool: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"view" | "draw">("view");
  const [tool, setTool] = useState<"rect" | "circle">("rect");
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [currentShape, setCurrentShape] = useState<Partial<Annotation> | null>(null);
  const [showComments, setShowComments] = useState(true);
  const [pendingAnnotation, setPendingAnnotation] = useState<Partial<Annotation> | null>(null);
  const [commentText, setCommentText] = useState("");
  
  // Ref for the page height to ensure overlay covers everything
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(Math.max(document.documentElement.scrollHeight, document.body.scrollHeight));
    };
    
    updateHeight();
    window.addEventListener("resize", updateHeight);
    // Also update periodically in case of dynamic content
    const interval = setInterval(updateHeight, 2000);
    
    return () => {
      window.removeEventListener("resize", updateHeight);
      clearInterval(interval);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (mode !== "draw" || pendingAnnotation) return;
    
    // Get coordinates relative to the page
    const x = e.pageX;
    const y = e.pageY;
    
    setIsDrawing(true);
    setStartPos({ x, y });
    setCurrentShape({
      type: tool,
      x,
      y,
      width: 0,
      height: 0,
      radius: 0
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing || !currentShape) return;

    const currentX = e.pageX;
    const currentY = e.pageY;

    if (tool === "rect") {
      const width = currentX - startPos.x;
      const height = currentY - startPos.y;
      setCurrentShape({
        ...currentShape,
        width,
        height
      });
    } else if (tool === "circle") {
      const dx = currentX - startPos.x;
      const dy = currentY - startPos.y;
      const radius = Math.sqrt(dx * dx + dy * dy);
      setCurrentShape({
        ...currentShape,
        radius
      });
    }
  };

  const handleMouseUp = () => {
    if (!isDrawing || !currentShape) return;
    
    setIsDrawing(false);
    
    // Normalize shape (handle negative width/height)
    let finalShape = { ...currentShape };
    if (tool === "rect") {
      if ((finalShape.width || 0) < 0) {
        finalShape.x = (finalShape.x || 0) + (finalShape.width || 0);
        finalShape.width = Math.abs(finalShape.width || 0);
      }
      if ((finalShape.height || 0) < 0) {
        finalShape.y = (finalShape.y || 0) + (finalShape.height || 0);
        finalShape.height = Math.abs(finalShape.height || 0);
      }
      
      // Ignore tiny shapes
      if ((finalShape.width || 0) < 10 || (finalShape.height || 0) < 10) {
        setCurrentShape(null);
        return;
      }
    } else {
        if ((finalShape.radius || 0) < 10) {
            setCurrentShape(null);
            return;
        }
    }

    setPendingAnnotation(finalShape);
    setCurrentShape(null);
  };

  const saveAnnotation = () => {
    if (!pendingAnnotation || !commentText.trim()) return;

    const newAnnotation: Annotation = {
      id: Math.random().toString(36).substr(2, 9),
      type: pendingAnnotation.type as "rect" | "circle",
      x: pendingAnnotation.x || 0,
      y: pendingAnnotation.y || 0,
      width: pendingAnnotation.width,
      height: pendingAnnotation.height,
      radius: pendingAnnotation.radius,
      text: commentText,
      timestamp: new Date()
    };

    setAnnotations([...annotations, newAnnotation]);
    setPendingAnnotation(null);
    setCommentText("");
    // Switch back to view mode automatically? Optional. Kepping in draw mode for now.
  };

  const cancelAnnotation = () => {
    setPendingAnnotation(null);
    setCommentText("");
  };

  const deleteAnnotation = (id: string) => {
    setAnnotations(annotations.filter(a => a.id !== id));
  };

  const scrollToAnnotation = (a: Annotation) => {
    window.scrollTo({
      top: a.y - 200,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
        {isOpen && (
          <div className="bg-white rounded-xl shadow-2xl p-4 mb-2 border border-border w-64 animate-in slide-in-from-bottom-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">Editor Tools</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              <Button 
                variant={mode === "draw" && tool === "rect" ? "default" : "outline"}
                className={`w-full justify-start gap-2 ${mode === "draw" && tool === "rect" ? "bg-prepr-green hover:bg-prepr-green-dark" : ""}`}
                onClick={() => { setMode("draw"); setTool("rect"); setShowComments(true); }}
              >
                <Square className="h-4 w-4" /> Rect
              </Button>
              <Button 
                variant={mode === "draw" && tool === "circle" ? "default" : "outline"}
                className={`w-full justify-start gap-2 ${mode === "draw" && tool === "circle" ? "bg-prepr-green hover:bg-prepr-green-dark" : ""}`}
                onClick={() => { setMode("draw"); setTool("circle"); setShowComments(true); }}
              >
                <Circle className="h-4 w-4" /> Circle
              </Button>
            </div>

            <div className="flex flex-col gap-2">
                <Button 
                  variant={mode === "view" ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                  onClick={() => setMode("view")}
                >
                  <MousePointer2 className="h-4 w-4" /> Navigation Mode
                </Button>
                <Button 
                    variant={showComments ? "secondary" : "ghost"}
                    className="w-full justify-start gap-2"
                    onClick={() => setShowComments(!showComments)}
                >
                    {showComments ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    {showComments ? "Hide Comments" : "Show Comments"}
                </Button>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase text-muted-foreground">Comments ({annotations.length})</span>
                </div>
                <div className="max-h-60 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                    {annotations.length === 0 ? (
                        <p className="text-xs text-muted-foreground italic">No comments yet. Select a tool to start.</p>
                    ) : (
                        annotations.map(a => (
                            <div 
                                key={a.id} 
                                className="text-sm p-2 bg-secondary/50 rounded hover:bg-secondary cursor-pointer border border-transparent hover:border-prepr-green transition-colors group"
                                onClick={() => scrollToAnnotation(a)}
                            >
                                <div className="flex justify-between items-start gap-2">
                                    <p className="line-clamp-2 text-foreground/90">{a.text}</p>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); deleteAnnotation(a.id); }}
                                        className="text-muted-foreground hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Trash2 className="h-3 w-3" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
          </div>
        )}

        <Button 
          className="h-14 w-14 rounded-full shadow-xl bg-prepr-orange hover:bg-prepr-orange-light text-white transition-all duration-300 hover:scale-105"
          onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X className="h-6 w-6" /> : <PenTool className="h-6 w-6" />}
        </Button>
      </div>

      {/* Drawing Overlay */}
      {(mode === "draw" || showComments) && (
        <div 
            className="absolute top-0 left-0 w-full z-[50]"
            style={{ 
                height: pageHeight, 
                pointerEvents: mode === "draw" ? "auto" : "none",
                cursor: mode === "draw" ? "crosshair" : "default"
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <svg className="w-full h-full">
                {/* Render Saved Annotations */}
                {showComments && annotations.map(a => (
                    <g key={a.id}>
                        {a.type === "rect" ? (
                            <rect 
                                x={a.x} 
                                y={a.y} 
                                width={a.width} 
                                height={a.height} 
                                fill="rgba(30, 169, 76, 0.2)" 
                                stroke="#1EA94C" 
                                strokeWidth="2"
                                rx="4"
                            />
                        ) : (
                            <circle 
                                cx={a.x} 
                                cy={a.y} 
                                r={a.radius} 
                                fill="rgba(30, 169, 76, 0.2)" 
                                stroke="#1EA94C" 
                                strokeWidth="2"
                            />
                        )}
                        {/* Label */}
                        <foreignObject x={a.type === 'rect' ? a.x : a.x + (a.radius || 0)} y={a.type === 'rect' ? a.y - 30 : a.y - (a.radius || 0) - 30} width="200" height="100">
                             <div className="inline-block bg-prepr-green text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]">
                                {a.text}
                             </div>
                        </foreignObject>
                    </g>
                ))}

                {/* Render Current Drawing Shape */}
                {isDrawing && currentShape && (
                     <g>
                         {tool === "rect" ? (
                            <rect 
                                x={currentShape.x} 
                                y={currentShape.y} 
                                width={currentShape.width} 
                                height={currentShape.height} 
                                fill="rgba(30, 169, 76, 0.1)" 
                                stroke="#1EA94C" 
                                strokeWidth="2" 
                                strokeDasharray="5,5"
                                rx="4"
                            />
                         ) : (
                            <circle 
                                cx={currentShape.x} 
                                cy={currentShape.y} 
                                r={currentShape.radius} 
                                fill="rgba(30, 169, 76, 0.1)" 
                                stroke="#1EA94C" 
                                strokeWidth="2"
                                strokeDasharray="5,5"
                            />
                         )}
                     </g>
                )}
            </svg>
            
            {/* Comment Input Modal */}
            {pendingAnnotation && (
                <div 
                    className="absolute z-[60] bg-white p-4 rounded-lg shadow-xl border border-border w-72 animate-in zoom-in-95"
                    style={{ 
                        top: (pendingAnnotation.y || 0) + (pendingAnnotation.height || pendingAnnotation.radius || 0) + 10, 
                        left: Math.min((pendingAnnotation.x || 0), document.body.clientWidth - 300) 
                    }}
                >
                    <h4 className="font-bold text-sm mb-2 text-foreground">Add Comment</h4>
                    <textarea 
                        className="w-full min-h-[80px] p-2 text-sm border border-input rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="What needs to be changed?"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        autoFocus
                    />
                    <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline" onClick={cancelAnnotation}>Cancel</Button>
                        <Button size="sm" onClick={saveAnnotation} className="bg-prepr-green hover:bg-prepr-green-dark text-white">Save</Button>
                    </div>
                </div>
            )}
        </div>
      )}
    </>
  );
};

export default FeedbackTool;