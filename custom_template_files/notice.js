/**
 * Notifications
 *
 * Use: feather icon js api from feathericons.com
 *
 * Example:
 * let notice = new Notice('Some error!', 'Message text', 'error');
 * notice.push();
 *
 */

function Notice(title = '', description = '', type = 'default', id = '', timeToDie = 5000) {

    if (id) {
        this.id = id;
    } else {
        this.id = 'custom-' + Math.random().toString(36).slice(2, 7);
    }
    this.type = type;
    this.title = title;
    this.description = description;
    this.timeToDie = timeToDie;

    // Get icon class from feathericons.com
    this.typeToClass = {
        'default': 'alert-circle',
        'success': 'check-circle',
        'error': 'x-circle',
    };

    this.parentId = 'notice-area';

    // Push it
    this.push = function () {
        let parent = document.getElementById(this.parentId);
        let notice = this.create();
        parent.prepend(notice);

        let self = this;

        setTimeout(function() {
            self.die();
        }, self.timeToDie);
    }

    // Create element
    this.create = function () {

        // Main element
        let element = document.createElement('div');
        element.classList.add('notice');
        if (this.type.length > 0) {
            element.classList.add(this.type);
        }
        element.id = this.id;

        // Add icon
        let icon = document.createElement('div');
        icon.classList.add('icon');
        if (this.type in this.typeToClass) {
            icon.innerHTML += feather.icons[this.typeToClass[this.type]].toSvg();
        } else {
            icon.innerHTML += feather.icons['alert-circle'].toSvg();
        }

        // Add content
        let content = document.createElement('div');
        content.classList.add('content');
        if (this.title.length > 0) {
            content.innerHTML += '<p class="title">' + this.title + '</p>';
        }
        if (this.description.length > 0) {
            content.innerHTML += '<p class="subtitle">' + this.description + '</p>';
        }

        // Add close button
        let closeButton = document.createElement('div');
        closeButton.classList.add('close');
        closeButton.innerHTML = feather.icons.x.toSvg();

        let self = this;

        closeButton.addEventListener('click', function (event) {
            event.preventDefault();
            self.die();
        });


        // Compose
        element.appendChild(icon);
        element.appendChild(content);
        element.appendChild(closeButton);

        return element;
    }

    // Die by self
    this.die = function () {
        let me = document.getElementById(this.id);
        if (me) {
            me.remove();
        }
    }
}


/**
 * Get new notifications of user and set it to read
 */

function showNewNotifications(set_to_read = false) {

    let args = {
        'action': 'get_new_user_notifications',
    }

    if (set_to_read === true) {
        args.set_status = 'read';
    }

    $.ajax({
        type: 'POST',
        url: window.location.origin + '/wp-admin/admin-ajax.php',
        data: args,
        dataType: 'json',
        success: function (response) {
            if (response.success == true && response.data) {
                response.data.forEach( function (element) {
                    let notice = new Notice(element.title, element.description, element.type, element.id);
                    notice.push();
                });
            }
        },
    });
};

/**
 * Store notification to database
 */
function store_new_notification(title, description = '', type = 'default', status = 'new') {
    let args = {
        'action': 'store_new_notification',
        'title': title,
        'description': description,
        'type': type,
        'status': status,
    }

    $.ajax({
        type: 'POST',
        url: window.location.origin + '/wp-admin/admin-ajax.php',
        data: args,
        dataType: 'json',
        success: function (response) {
            if (response.success == true && response.data) {
            }
        },
    });
}

window.addEventListener('load', function() {
    /**
     * Show new notifications only if user logged in
     */
    if ($("body").hasClass("logged-in")) {
        showNewNotifications(true);
    }
});
