    "use client";
    import { useEffect, useRef, useCallback } from 'react';
    import { useTheme } from './ThemeProvider';

    const CodeBackground = () => {
        const canvasRef = useRef(null);
        const { theme } = useTheme();
        const mousePosition = useRef({ x: null, y: null });
        const nodes = useRef([]);

        const createNodes = useCallback((canvas) => {
            const newNodes = [];
            const nodeCount = Math.floor((canvas.width * canvas.height) / 25000); 
            for (let i = 0; i < nodeCount; i++) {
                newNodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: Math.random() * 0.4 - 0.2,
                    vy: Math.random() * 0.4 - 0.2,
                    radius: Math.random() * 2 + 1,
                });
            }
            nodes.current = newNodes;
        }, []);

        useEffect(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let animationFrameId;

            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                createNodes(canvas); 
            };
            
            const handleMouseMove = (event) => {
                mousePosition.current = { x: event.clientX, y: event.clientY };
            };

            const handleMouseOut = () => {
                mousePosition.current = { x: null, y: null };
            };

            window.addEventListener('resize', resizeCanvas);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseout', handleMouseOut);
            
            resizeCanvas();

            const draw = () => {
                if (!ctx) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                const nodeColor = theme === 'dark' ? 'rgba(42, 140, 252, 0.8)' : 'rgba(255, 107, 107, 0.8)';
                const lineColor = theme === 'dark' ? 'rgba(42, 140, 252, 0.15)' : 'rgba(255, 107, 107, 0.15)';
                const mouseLineColor = theme === 'dark' ? 'rgba(255, 107, 107, 0.25)' : 'rgba(42, 140, 252, 0.25)';

                nodes.current.forEach(node => {
                    node.x += node.vx;
                    node.y += node.vy;

                    if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                    if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                    ctx.fillStyle = nodeColor;
                    ctx.fill();

                    for (let i = 0; i < nodes.current.length; i++) {
                        const otherNode = nodes.current[i];
                        const dist = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
                        if (dist < 150) {
                            ctx.beginPath();
                            ctx.moveTo(node.x, node.y);
                            ctx.lineTo(otherNode.x, otherNode.y);
                            ctx.strokeStyle = lineColor;
                            ctx.lineWidth = 0.5;
                            ctx.stroke();
                        }
                    }

                    if (mousePosition.current.x) {
                        const mouseDist = Math.hypot(node.x - mousePosition.current.x, node.y - mousePosition.current.y);
                        if (mouseDist < 250) {
                             ctx.beginPath();
                             ctx.moveTo(node.x, node.y);
                             ctx.lineTo(mousePosition.current.x, mousePosition.current.y);
                             ctx.strokeStyle = mouseLineColor;
                             ctx.lineWidth = 0.7;
                             ctx.stroke();
                        }
                    }
                });
            };

            const animate = () => {
                draw();
                animationFrameId = window.requestAnimationFrame(animate);
            };
            
            animate();

            return () => {
                window.removeEventListener('resize', resizeCanvas);
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseout', handleMouseOut);
                window.cancelAnimationFrame(animationFrameId);
            };
        }, [theme, createNodes]);

        return (
            <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#f0f0f0] dark:bg-[#0a0a0a]">
                 <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full"
                />
            </div>
        );
    };

    export default CodeBackground;
    