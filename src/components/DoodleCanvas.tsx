import React, { useRef, useState, useEffect } from 'react';
import { Pencil, Eraser, RotateCcw, Sparkles } from 'lucide-react';

interface DoodleCanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DoodleCanvas: React.FC<DoodleCanvasProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'pencil' | 'eraser'>('pencil');
  const [lineWidth, setLineWidth] = useState(2.5);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions based on client rect
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      // Only set size if not set or aspect changed to preserve drawings
      if (canvas.width !== rect.width || canvas.height !== rect.height) {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        if (tempCtx && canvas.width > 0) {
          tempCtx.drawImage(canvas, 0, 0);
        }

        canvas.width = rect.width;
        canvas.height = rect.height;

        if (tempCtx && canvas.width > 0) {
          ctx.drawImage(tempCanvas, 0, 0);
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [isOpen]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    setHasDrawn(true);

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = tool === 'eraser' ? lineWidth * 4 : lineWidth;
    ctx.strokeStyle = tool === 'eraser' ? '#EBE7DF' : '#141414';
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  if (!isOpen) return null;

  return (
    <div className="relative my-8 overflow-hidden rounded-2xl border-2 border-dashed border-black/30 bg-[#EBE7DF] p-4 transition-all">
      {/* Header bar of the sketchpad */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 border-b border-black/15 pb-3">
        <div className="flex items-center gap-2">
          <Pencil className="h-4 w-4" />
          <span className="font-['Syne'] text-sm font-bold uppercase tracking-wider">
            Live Karachi Sketchpad
          </span>
          <span className="text-xs text-black/60">· Doodle your custom burger or coffee note</span>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTool('pencil')}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
              tool === 'pencil'
                ? 'bg-black text-white shadow-sm'
                : 'border border-black bg-white text-black hover:bg-black/5'
            }`}
          >
            <Pencil className="h-3 w-3" />
            2B Pencil
          </button>

          <button
            onClick={() => setTool('eraser')}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
              tool === 'eraser'
                ? 'bg-black text-white shadow-sm'
                : 'border border-black bg-white text-black hover:bg-black/5'
            }`}
          >
            <Eraser className="h-3 w-3" />
            Eraser
          </button>

          <button
            onClick={clearCanvas}
            disabled={!hasDrawn}
            className="flex items-center gap-1 rounded-full border border-black/30 bg-white/70 px-3 py-1 text-xs text-black/70 hover:bg-white hover:text-black disabled:opacity-30"
          >
            <RotateCcw className="h-3 w-3" />
            Clear
          </button>

          <button
            onClick={onClose}
            className="rounded-full border border-black px-2.5 py-1 text-xs font-bold hover:bg-black hover:text-white"
          >
            Done
          </button>
        </div>
      </div>

      {/* Drawing Canvas Area */}
      <div className="relative h-64 w-full touch-none overflow-hidden rounded-xl border border-black/20 bg-[#F4EFE6] shadow-inner">
        {!hasDrawn && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-black/35">
            <Sparkles className="mb-2 h-6 w-6 stroke-[1.5]" />
            <p className="font-['Syne'] text-sm font-semibold tracking-wide">
              Draw with your pencil cursor here
            </p>
            <p className="text-xs">Sketch your dream double-patty smash or iced pour-over</p>
          </div>
        )}
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="h-full w-full cursor-crosshair"
        />
      </div>
    </div>
  );
};
