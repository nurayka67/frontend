$(document).ready(function() {
    const $toggleButton = $('#tpggleBtn');
    const $demoText = $('#text');

    $toggleButton.click(function() {
        // Toggle highlight class
        $demoText.toggleClass('highlight');

        // Update button text
        const isHighlighted = $demoText.hasClass('highlight');

        if (isHighlighted) {
            $toggleButton.text('Remove Highlight')
            .css('background', 'linear-gradient(to right, #e74c3c, #c0392b)');
        } else {
            $toggleButton.text('Toggle Highlight')
            .css('background', 'linear-gradient(to right, #2ecc71, #27ae60)');
        }
    });
});