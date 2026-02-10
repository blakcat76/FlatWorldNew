// FlatWorld Tooltip System
// Accessible tooltips with hover, focus, toggle, and ESC support

(function() {
    'use strict';
    
    let activeTooltip = null;
    
    function initTooltips() {
        // Handle ESC key to close active tooltip
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && activeTooltip) {
                activeTooltip.classList.remove('tooltip-active');
                activeTooltip = null;
            }
        });
        
        // Handle click-to-toggle tooltips
        document.addEventListener('click', function(e) {
            const wrapper = e.target.closest('[data-tip-toggle="true"]');
            
            if (wrapper) {
                e.preventDefault();
                
                // Close previous active tooltip if different
                if (activeTooltip && activeTooltip !== wrapper) {
                    activeTooltip.classList.remove('tooltip-active');
                }
                
                // Toggle current tooltip
                wrapper.classList.toggle('tooltip-active');
                activeTooltip = wrapper.classList.contains('tooltip-active') ? wrapper : null;
            } else if (activeTooltip && !e.target.closest('.tooltip-wrapper')) {
                // Click outside - close active tooltip
                activeTooltip.classList.remove('tooltip-active');
                activeTooltip = null;
            }
        });
        
        // Enhance accessibility - ensure tooltips are keyboard accessible
        const tooltipWrappers = document.querySelectorAll('.tooltip-wrapper');
        tooltipWrappers.forEach(function(wrapper) {
            // Make focusable if not already
            if (!wrapper.hasAttribute('tabindex') && !wrapper.querySelector('[tabindex]')) {
                wrapper.setAttribute('tabindex', '0');
            }
            
            // Add ARIA attributes
            const tooltip = wrapper.querySelector('.tooltip');
            if (tooltip) {
                const tooltipId = 'tooltip-' + Math.random().toString(36).substr(2, 9);
                tooltip.setAttribute('id', tooltipId);
                tooltip.setAttribute('role', 'tooltip');
                wrapper.setAttribute('aria-describedby', tooltipId);
            }
        });
    }
    
    // Export for global access
    window.initTooltips = initTooltips;
    
    // Auto-init if DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTooltips);
    } else {
        initTooltips();
    }
})();
