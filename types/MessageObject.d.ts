declare interface MessageObject {
    /**
     * Shows a message with the specified options.
     * @param {object} options - The options for displaying the message.
     * @param {string} options.caption - The caption of the message.
     * @param {string} options.msg - The content of the message.
     * @param {string} options.icon - The icon to display with the message.
     * @param {number} options.width - The width of the message.
     */
    show(options: {
      caption: string;
      msg: string;
      icon: string;
      width: number;
    }): void;
  }
declare const msgobj: MessageObject;