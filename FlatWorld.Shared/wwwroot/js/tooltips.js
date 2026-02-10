// FlatWorld Tooltip System
// Accessible tooltips with hover/focus and optional click toggle

(function() {
    'use strict';

    let activeTooltip = null;

    function initTooltips() {
        // Find all elements with data-tooltip attribute
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        
        tooltipElements.forEach(element => {
            setupTooltip(element);
        });
    }

    function setupTooltip(element) {
        const tooltipText = element.getAttribute('data-tooltip');
        const isToggle = element.getAttribute('data-tip-toggle') === 'true';
        
        // Create tooltip element if it doesn't exist
        let tooltip = element.querySelector('.tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            tooltip.setAttribute('role', 'tooltip');
            tooltip.setAttribute('aria-hidden', 'true');
            
            // Wrap element in container if not already wrapped
            if (!element.classList.contains('tooltip-container')) {
                const container = document.createElement('span');
                container.className = 'tooltip-container';
                element.parentNode.insertBefore(container, element);
                container.appendChild(element);
                container.appendChild(tooltip);
            } else {
                element.appendChild(tooltip);
            }
        }

        // Make element focusable if it's not already
        if (!element.hasAttribute('tabindex') && !['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName)) {
            element.setAttribute('tabindex', '0');
        }

        // Add ARIA attributes
        element.setAttribute('aria-describedby', tooltip.id || `tooltip-${Math.random().toString(36).substr(2, 9)}`);
        if (!tooltip.id) {
            tooltip.id = element.getAttribute('aria-describedby');
        }

        // Event handlers for hover/focus
        element.addEventListener('mouseenter', () => showTooltip(tooltip));
        element.addEventListener('mouseleave', () => {
            if (!isToggle || !tooltip.classList.contains('show')) {
                hideTooltip(tooltip);
            }
        });
        
        element.addEventListener('focus', () => showTooltip(tooltip));
        element.addEventListener('blur', () => {
            if (!isToggle || !tooltip.classList.contains('show')) {
                hideTooltip(tooltip);
            }
        });

        // Click toggle functionality
        if (isToggle) {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                toggleTooltip(tooltip);
            });
        }
    }

    function showTooltip(tooltip) {
        tooltip.classList.add('show');
        tooltip.setAttribute('aria-hidden', 'false');
    }

    function hideTooltip(tooltip) {
        tooltip.classList.remove('show');
        tooltip.setAttribute('aria-hidden', 'true');
        if (activeTooltip === tooltip) {
            activeTooltip = null;
        }
    }

    function toggleTooltip(tooltip) {
        if (activeTooltip && activeTooltip !== tooltip) {
            hideTooltip(activeTooltip);
        }
        
        if (tooltip.classList.contains('show')) {
            hideTooltip(tooltip);
        } else {
            showTooltip(tooltip);
            activeTooltip = tooltip;
        }
    }

    // Close tooltip on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && activeTooltip) {
            hideTooltip(activeTooltip);
        }
    });

    // Close tooltip on outside click
    document.addEventListener('click', (e) => {
        if (activeTooltip && !e.target.closest('.tooltip-container')) {
            hideTooltip(activeTooltip);
        }
    });

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTooltips);
    } else {
        initTooltips();
    }

    // Export function for manual initialization of new tooltips
    window.FlatWorld = window.FlatWorld || {};
    window.FlatWorld.initTooltips = initTooltips;
})();
