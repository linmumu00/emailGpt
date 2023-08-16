const notifications = {
    autoCloseTimeout: 4000,
    container: '.notification-zone',
    error: function (text, id, params) {
        this.showNotification(this.getErrorNotification.bind(this), text, id, params);
    },
    warn: function (text, id, params) {
        this.showNotification(this.getWarningNotification.bind(this), text, id, params);
    },
    info: function (text, id, params) {
        this.showNotification(this.getInfoNotification.bind(this), text, id, params);
    },
    success: function (text, id, params) {
        this.showNotification(this.getSuccessNotification.bind(this), text, id, params);
    },
    loader: function (text, id, params) {
        this.showNotification(this.getLoaderNotification.bind(this), text, id, params);
    },
    hide: function (id) {
        const updatedNotifications = this.state.notifications.filter(notification => notification.id !== id);
        this.setState({ notifications: updatedNotifications });
    },
    showNotification: function (notificationGetter, text, id, params) {
        params = Object.assign({ autoClose: true, closeable: true }, params || {});

        if (!id || !this.state.notifications.some((notification) => notification.id === id)) {
            const toast = notificationGetter(text, id, !params.closeable);
            this.setState((prevState) => ({
                notifications: [...prevState.notifications, { id: id, toast: toast }],
            }));

            if (params.autoClose) {
                setTimeout(() => {
                    this.hide(id);
                }, this.autoCloseTimeout);
            }
        }
    },
    getErrorNotification: function (text, id, nonclosable) {
        return this.getNotificationTemplate('alert-danger', text, id, nonclosable);
    },
    getWarningNotification: function (text, id, nonclosable) {
        return this.getNotificationTemplate('alert-warning', text, id, nonclosable);
    },
    getInfoNotification: function (text, id, nonclosable) {
        return this.getNotificationTemplate('alert-info', text, id, nonclosable);
    },
    getSuccessNotification: function (text, id, nonclosable) {
        return this.getNotificationTemplate('alert-success', text, id, nonclosable);
    },
    getLoaderNotification: function (text, id) {
        return (
            <div className="alert alert-info" role="alert">
                <div style={{ width: 'auto', marginRight: '15px', float: 'left !important' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', boxShadow: '1px 1px 0px #31708f', animation: 'cssload-spin 690ms infinite linear' }}></div>
                </div>
                {text}
            </div>
        );
    },
    getNotificationTemplate: function (classes, text, id, nonclosable) {
        return (
            <div className={`alert alert-dismissible ${classes} ${nonclosable ? 'nonclosable' : ''}`} role="alert">
                {!nonclosable && (
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                )}
                {text}
            </div>
        );
    }
};

export default notifications;
