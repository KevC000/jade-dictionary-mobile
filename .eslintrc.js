module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 'warn', // Warn instead of error on console.log
    'react/prop-types': 'off', // Turn off prop-types rule for React components
    'no-unused-vars': 'warn', // Warn for unused variables instead of error
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+ JSX Transform
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }], // Use Prettier rules as warnings
    // You can add more rules or adjust existing ones here
  },
}
