module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this component's name?",
      },
      {
        type: "input",
        name: "element",
        message: "HTML element (div is default)",
        default: "div",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
    ],
  });
  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this page's name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/app/{{kebabCase name}}/page.tsx",
        templateFile: "templates/PageComponent.tsx.hbs",
      },
    ],
  });
};
