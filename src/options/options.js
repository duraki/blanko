// Saves configuration.
function save_options()
{
    var inspire = document.getElementById('inspire').value;
    var dark = document.getElementById('dark').checked;

    chrome.storage.sync.set({
        inspireData: inspire,
        darkTheme: dark 
    }, function() {
        // Let user know operation has been made.
        var status = document.getElementById('status');
        status.textContent = 'Option saved.';

            setTimeout(function() {
                    status.textContent = '';
            }, 750);

        });
}

// Restore configuration
function restore_options()
{
    // Defaults.
    chrome.storage.sync.get({
        inspireData: 'Hi. Hey. Enjoy.',
        darkTheme: 0 
    }, function(items) {
        document.getElementById('inspire').value = items.inspireData;
        document.getElementById('dark').checked = items.darkTheme;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
