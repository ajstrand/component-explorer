import { v4 as uuidv4 } from 'uuid';

export default function () {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Storybook</title>
        <script type="text/javascript">
          window.dataId = '${uuidv4()}';
        </script>
        <style>
          /*
            When resizing panels, the drag event breaks if the cursor
            moves over the iframe. Add the 'dragging' class to the body
            at drag start and remove it when the drag ends.
           */
          .dragging iframe {
            pointer-events: none;
          }
        </style>
      </head>
      <body style="margin: 0;">
        <div id="root" />
        <script src="static/admin.bundle.js"></script>
      </body>
    </html>
  `;
}