Contentful HTML Editor

sudo npm install -g npm-check-updates
ncu -u
rm -rf node_modules
rm yarn.lock
rm -rf build
rm .DS_Store

npm install -g contentful-cli

contentful login --management-token 

Ref:
https://contentful-field-editors.netlify.app/rich-text
https://www.contentful.com/developers/docs/extensibility/app-framework/sdk/#editor
https://www.contentful.com/developers/docs/extensibility/field-editors
https://contentful-field-editors.netlify.app
https://github.com/contentful/field-editors/blob/master/extensions/rich-text-extension/src/index.tsx
https://www.contentful.com/help/entry-editor/#slug
https://www.contentful.com/developers/docs/extensibility/ui-extensions/use-cases


https://www.contentful.com/developers/docs/extensibility/ui-extensions/examples
https://github.com/contentful/extensions/blob/master/samples/ace-editor/extension.json
https://github.com/contentful/extensions/tree/master/samples/entry-editor-extension
https://contentful-field-editors.netlify.app/shared/default-field-editors