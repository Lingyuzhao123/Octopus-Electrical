import { useState, useEffect, useRef, useCallback } from 'react';

export const useFullPageScroll = (sections) => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const containerRef = useRef(null);

    // 滚动到指定section
    const scrollToSection = useCallback((index) => {
        if (index < 0 || index >= sections.length || isScrolling) return;
        
        setIsScrolling(true);
        setCurrentSection(index);
        
        // 更新URL hash
        const sectionId = sections[index];
        window.history.replaceState(null, null, `#${sectionId}`);
        
        // 滚动动画完成后解锁
        setTimeout(() => {
            setIsScrolling(false);
        }, 1000); // 1秒动画时间
    }, [sections, isScrolling]);

    // 处理滚轮事件
    const handleWheel = useCallback((e) => {
        e.preventDefault();
        
        if (isScrolling) return;

        if (e.deltaY > 0) {
            // 向下滚动
            scrollToSection(currentSection + 1);
        } else {
            // 向上滚动
            scrollToSection(currentSection - 1);
        }
    }, [currentSection, isScrolling, scrollToSection]);

    // 处理键盘事件
    const handleKeyDown = useCallback((e) => {
        if (isScrolling) return;

        switch (e.key) {
            case 'ArrowDown':
            case 'PageDown':
                e.preventDefault();
                scrollToSection(currentSection + 1);
                break;
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                scrollToSection(currentSection - 1);
                break;
            case 'Home':
                e.preventDefault();
                scrollToSection(0);
                break;
            case 'End':
                e.preventDefault();
                scrollToSection(sections.length - 1);
                break;
        }
    }, [currentSection, isScrolling, scrollToSection, sections.length]);

    // 处理导航点击
    const handleNavClick = useCallback((sectionId) => {
        const index = sections.indexOf(sectionId);
        if (index !== -1) {
            scrollToSection(index);
        }
    }, [sections, scrollToSection]);

    // 初始化时检查URL hash
    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const index = sections.indexOf(hash);
            if (index !== -1) {
                setCurrentSection(index);
            }
        }
    }, [sections]);

    // 添加事件监听器
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            container.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleWheel, handleKeyDown]);

    return {
        currentSection,
        containerRef,
        scrollToSection,
        handleNavClick,
        isScrolling
    };
};
