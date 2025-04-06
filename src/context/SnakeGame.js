import React, { useEffect, useState, useRef } from 'react';
import { useEasterEgg } from './EasterEggContext';
import zoroSkin from '../assets/SnakeSkins/zoro.png';
import zoroSnake from '../assets/SnakeSkins/zoroSnake.png';
import luffySkin from '../assets/SnakeSkins/luffy.png';
import luffySnake from '../assets/SnakeSkins/luffySnake.png';
import zoroFood from '../assets/SnakeSkins/zoroFood.png';
import luffyFood from '../assets/SnakeSkins/luffyFood.png';
import zoroObstacle from '../assets/SnakeSkins/zoroObstacle.png';
import luffyObstacle from '../assets/SnakeSkins/luffyObstacle.png';
import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
// import pixelSkin from '../assets/snakeskins/pixel.png';
// import ghostSkin from '../assets/snakeskins/ghost.png';

const GRID_SIZE = 60;


const SnakeGame = ({ fullscreen = true }) => {
    const { incrementEggs, foundEggs } = useEasterEgg();
    const [snake, setSnake] = useState([{ x: 1, y: 1 }]);
    const [direction, setDirection] = useState('RIGHT');
    const [food, setFood] = useState(randomFoodPosition());
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const [selectedSkin, setSelectedSkin] = useState(null);

    const [obstacles, setObstacles] = useState([]);

    useEffect(() => {
        if (selectedSkin) {
            setObstacles(generateObstaclePattern());
        }
    }, [selectedSkin]);

    const intervalRef = useRef(null);
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

    const BOARD_WIDTH = fullscreen ? Math.floor(window.innerWidth / GRID_SIZE) : 20;
    const BOARD_HEIGHT = fullscreen ? Math.floor(window.innerHeight / GRID_SIZE) : 20;

    const skinsMap = {
        zoro: zoroSkin,
        luffy: luffySkin,
        // pixel: pixelSkin,
        // ghost: ghostSkin,
    };

    useEffect(() => {
        if (!isDesktop || gameOver || showIntro) return;

        intervalRef.current = setInterval(() => {
            moveSnake();
        }, 120);

        return () => clearInterval(intervalRef.current);
    });

    useEffect(() => {
        if (score >= 10 && !foundEggs.includes('#2')) {
            incrementEggs('#2');
        }
    }, [score]);

    // ✅ Génère le fruit seulement quand les obstacles sont en place
    useEffect(() => {
        if (obstacles.length > 0 && selectedSkin) {
            setFood(randomFoodPosition(BOARD_WIDTH, BOARD_HEIGHT, snake, obstacles));
        }
    }, [obstacles, selectedSkin]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    if (direction !== 'DOWN') setDirection('UP');
                    break;
                case 'ArrowDown':
                    if (direction !== 'UP') setDirection('DOWN');
                    break;
                case 'ArrowLeft':
                    if (direction !== 'RIGHT') setDirection('LEFT');
                    break;
                case 'ArrowRight':
                    if (direction !== 'LEFT') setDirection('RIGHT');
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [direction]);

    function moveSnake() {
        const newSnake = [...snake];
        const head = { ...newSnake[0] };

        switch (direction) {
            case 'UP': head.y -= 1; break;
            case 'DOWN': head.y += 1; break;
            case 'LEFT': head.x -= 1; break;
            case 'RIGHT': head.x += 1; break;
        }

        if (
            head.x < 0 ||
            head.x >= BOARD_WIDTH ||
            head.y < 0 ||
            head.y >= BOARD_HEIGHT ||
            newSnake.some(segment => segment.x === head.x && segment.y === head.y) ||
            obstacles.some(ob => ob.x === head.x && ob.y === head.y)
        ) {
            endGame();
            return;
        }

        newSnake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            setScore(prev => prev + 1);
            setFood(randomFoodPosition(BOARD_WIDTH, BOARD_HEIGHT, newSnake, obstacles));
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
    }

    function endGame() {
        clearInterval(intervalRef.current);
        setGameOver(true);
    }

    function resetGame() {
        setSnake([{ x: 1, y: 1 }]);
        setDirection('RIGHT');
        setFood(randomFoodPosition(BOARD_WIDTH, BOARD_HEIGHT, snake, obstacles));
        setScore(0);
        setGameOver(false);
        setShowIntro(false);
        setAttempts((prev) => prev + 1);
    }


    const getSkinStyle = (skin) => {
        if (selectedSkin !== skin) return 'border-gray-500';
        switch (skin) {
            case 'zoro':
                return 'border-green-400 bg-green-900/20';
            case 'luffy':
                return 'border-red-400 bg-red-900/20';
            default:
                return 'border-gray-500';
        }
    };

    const getBodyImage = () => {
        switch (selectedSkin) {
            case 'zoro': return zoroSnake;
            case 'luffy': return luffySnake;
            default: return null;
        }
    };

    const getFoodImage = () => {
        switch (selectedSkin) {
            case 'zoro':
                return zoroFood;
            case 'luffy':
                return luffyFood;
            default:
                return null;
        }
    };

    const getObstacleImage = () => {
        switch (selectedSkin) {
            case 'zoro':
                return zoroObstacle;
            case 'luffy':
                return luffyObstacle;
            default:
                return zoroObstacle; // fallback
        }
    };

    const generateObstaclePattern = () => {
        const wall = [];

        // Cadre
        for (let i = 0; i < BOARD_WIDTH; i++) {
            wall.push({ x: i, y: 0 });
            wall.push({ x: i, y: BOARD_HEIGHT - 1 });
        }
        for (let i = 1; i < BOARD_HEIGHT - 1; i++) {
            wall.push({ x: 0, y: i });
            wall.push({ x: BOARD_WIDTH - 1, y: i });
        }

        // Murs verticaux (colonnades)
        for (let y = 2; y < BOARD_HEIGHT - 2; y++) {
            if (y % 4 !== 0) {
                wall.push({ x: 4, y });
                wall.push({ x: BOARD_WIDTH - 5, y });
            }
        }

        for (let y = 3; y < BOARD_HEIGHT - 3; y++) {
            if (y % 3 !== 0) {
                wall.push({ x: 8, y });
                wall.push({ x: BOARD_WIDTH - 9, y });
            }
        }

        // Murs horizontaux (symétrie miroir)
        for (let x = 3; x < BOARD_WIDTH - 3; x++) {
            if (x % 4 !== 0) {
                wall.push({ x, y: 5 });
                wall.push({ x, y: BOARD_HEIGHT - 4 });
            }
        }

        return wall;
    };

    const [attempts, setAttempts] = useState(0);
    const [showGoalAnimation, setShowGoalAnimation] = useState(false);

    const getSkinImage = () => selectedSkin ? skinsMap[selectedSkin] : '';

    return (
        <div className={fullscreen ? "fixed inset-0 z-50" : "w-full h-full flex justify-center items-center"}>
            {!isDesktop ? (
                <p className="text-center text-gray-500 italic text-sm px-6">
                    This game requires a keyboard. Try it on a computer 🧑‍💻
                </p>
            ) : (
                <div
                    className="relative bg-transparent"
                    style={{
                        width: fullscreen ? '100vw' : GRID_SIZE * BOARD_WIDTH,
                        height: fullscreen ? '100vh' : GRID_SIZE * BOARD_HEIGHT,
                    }}
                >
                    {/* INTRO SCREEN */}
                    {showIntro && (
                        <div className="absolute inset-0 z-50 bg-black/80 flex flex-col justify-center items-center text-white p-6">
                            <h2 className="text-2xl font-bold mb-4">🎮 Welcome to Snake Mode</h2>
                            <p className="text-sm text-gray-300 mb-6 text-center max-w-md">
                                Reach <strong>10 points</strong> to unlock the <span className="text-green-400 font-semibold">#2 Gamer</span> easter egg !<br />
                                Choose your snake skin and start playing
                            </p>

                            {/* SKIN SELECTION */}
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
                                {['zoro', 'luffy'].map((skin) => (
                                    <button
                                        key={skin}
                                        onClick={() => setSelectedSkin(skin)}
                                        className={`p-3 border rounded-lg w-20 h-24 transition-all flex flex-col items-center justify-center ${getSkinStyle(skin)}`}
                                    >
                                        <img src={skinsMap[skin]} alt={skin} className="w-8 h-8 mb-2" />
                                        <span className="text-xs capitalize">{skin}</span>
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => setShowIntro(false)}
                                disabled={!selectedSkin}
                                className="px-5 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 disabled:opacity-50 transition"
                            >
                                Start Playing
                            </button>

                        </div>

                    )}

                    {/* Obstacles */}
                    {obstacles.map((block, i) => (
                        <img
                            key={`ob-${i}`}
                            src={getObstacleImage()}
                            alt="obstacle"
                            className="absolute"
                            style={{
                                width: GRID_SIZE,
                                height: GRID_SIZE,
                                left: block.x * GRID_SIZE,
                                top: block.y * GRID_SIZE,
                            }}
                        />
                    ))}

                    {/* Snake */}
                    {snake.map((segment, i) => {
                        const isHead = i === 0;

                        const positionStyle = {
                            width: GRID_SIZE,
                            height: GRID_SIZE,
                            left: segment.x * GRID_SIZE,
                            top: segment.y * GRID_SIZE,
                        };

                        return (
                            <div key={i} className="absolute" style={positionStyle}>
                                {isHead ? (
                                    <img src={getSkinImage()} alt="snake-head" className="w-full h-full" />
                                ) : (
                                    <motion.img
                                        src={getBodyImage()}
                                        alt="snake-body"
                                        className={`w-full h-full ${i === snake.length - 1 ? 'rounded-br-2xl opacity-90' : ''}`}
                                        initial={{ scale: 1, opacity: 0.9 }}
                                        animate={{ scale: [1, 1.1, 1], opacity: [0.85, 1, 0.85] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                    />
                                )}
                            </div>
                        );
                    })}

                    {/* Food */}
                    <motion.img
                        src={getFoodImage()} xx
                        alt="food"
                        className="absolute"
                        style={{
                            width: GRID_SIZE,
                            height: GRID_SIZE,
                            left: food.x * GRID_SIZE,
                            top: food.y * GRID_SIZE,
                        }}
                        animate={{
                            y: [0, -1, 0],
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />

                    {/* Score / Game Over */}
                    <div className="absolute top-4 left-4 z-20 flex flex-col items-start gap-2 font-mono text-sm sm:text-base text-white">
                        <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-1 shadow-md flex items-center gap-2">
                            <span className="text-gray-300">Score</span>
                            <span className="text-green-400 font-semibold tabular-nums">{score}</span>
                        </div>
                        <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-1 shadow-md flex items-center gap-2">
                            <span className="text-gray-300">Attempts</span>
                            <span className="text-yellow-300 font-semibold tabular-nums">{attempts}</span>
                        </div>
                    </div>

                    {gameOver && (
                        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm text-center px-6">
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
                                GAME OVER
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-md">
                                Oups, You’ve crashed your snake...
                            </p>

                            <div className='gap-4 flex flex-row'>
                                <div className="flex gap-4">


                                    <button
                                        onClick={resetGame}
                                        className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-2 rounded-lg font-semibold transition duration-200 shadow-sm backdrop-blur-md"
                                    >
                                        Retry
                                    </button>
                                    <Dialog.Close asChild>
                                        <button
                                            className="bg-red-500/40 hover:bg-red-500/60 border border-red-500/50 text-white px-6 py-2 rounded-lg font-semibold transition duration-200 shadow-sm backdrop-blur-md"
                                        >
                                            Leave
                                        </button>
                                    </Dialog.Close>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

function randomFoodPosition(width = 20, height = 20, snake = [], obstacles = []) {
    let pos;
    do {
        pos = {
            x: Math.floor(Math.random() * (width - 2)) + 1,         // x ∈ [1, width - 2]
            y: Math.floor(Math.random() * (height - 3)) + 1,        // y ∈ [1, height - 3]
        };
    } while (
        snake.some(segment => segment.x === pos.x && segment.y === pos.y) ||
        obstacles.some(block => block.x === pos.x && block.y === pos.y)
    );
    return pos;
}

export default SnakeGame;