'use client';
import { motion } from 'framer-motion';

const ChristmasTree = () => {
    return (
        <div className="relative w-full max-w-lg mx-auto">
            <motion.svg
                viewBox="0 0 200 300"
                className="w-full h-full"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Star */}
                <motion.path
                    d="M100 20L105 35L120 35L108 45L113 60L100 50L87 60L92 45L80 35L95 35L100 20Z"
                    fill="#FFD700"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                />

                {/* Tree Layers */}
                <motion.path
                    d="M100 40L130 80H70L100 40Z"
                    fill="#2F855A"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
                <motion.path
                    d="M100 70L140 120H60L100 70Z"
                    fill="#276749"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                />
                <motion.path
                    d="M100 100L150 160H50L100 100Z"
                    fill="#2F855A"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                />

                {/* Trunk */}
                <motion.rect
                    x="90"
                    y="160"
                    width="20"
                    height="40"
                    fill="#8B4513"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.6 }}
                />

                {/* Snow Ground */}
                <motion.path
                    d="M0 200H200V220Q100 240 0 220Z"
                    fill="#E2E8F0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                />
            </motion.svg>
        </div>
    );
};

export default ChristmasTree;
