const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("script", {
      key: "ahrefs-analytics",
      dangerouslySetInnerHTML: {
        __html: `
          var ahrefs_analytics_script = document.createElement('script');
          ahrefs_analytics_script.async = true;
          ahrefs_analytics_script.src = 'https://analytics.ahrefs.com/analytics.js';
          ahrefs_analytics_script.setAttribute('data-key', 'jibhCjTFTFfD7K4i/Viv4g');
          document.getElementsByTagName('head')[0].appendChild(ahrefs_analytics_script);
        `,
      },
    }),
  ])
}
