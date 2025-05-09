export default {
  extends: ["stylelint-config-standard", "@navikt/aksel-stylelint/recommended"],
  rules: {
    "selector-class-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
  },
  ignoreFiles: "dist/**/*",
};
