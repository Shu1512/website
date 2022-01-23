module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // セミコロン必須
    'declaration-block-trailing-semicolon': 'always',
    // シングルクオーテーション
    'string-quotes': 'single',
    // url()内のクオーテーションは省略
    'function-url-quotes': 'never',
    // 1つの短縮プロパティに結合できるロングハンドプロパティを禁止
    'declaration-block-no-redundant-longhand-properties': true,
    // ロングハンドプロパティをショートハンドプロパティでの上書きを禁止
    'declaration-block-no-shorthand-property-overrides': true,
    // 省略形のプロパティで冗長な値を許可しない
    'shorthand-property-no-redundant-values': true,
    // 長さがゼロの単位は許可しない
    'length-zero-no-unit': true,
    // 1未満の小数には先行ゼロを禁止(prettierと競合するためトリ)
    // 'number-leading-zero': 'never',
    // 関数名の小文字や大文字の指定を無視
    'function-name-case': null,
    // 宣言の前の空行を有無を無視
    'declaration-empty-line-before': null,
    // 詳細度が低いものを後に書くことを許可
    'no-descending-specificity': null,
  },
}
