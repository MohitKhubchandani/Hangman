function style(type) {
  const primary = 'px-4 py-2 bg-blue-500 border-blue-700 text-white hover:bg-blue-900 rounded-md transition-all';
  const secondary = 'px-4 py-2 bg-gray-500 border-gray-700 text-white hover:bg-gray-900 rounded-md transition-all';
  const warning = 'px-4 py-2 bg-yellow-500 border-red-700 text-white hover:bg-yellow-700 rounded-md transition-all';

  if (type === 'Primary') {
    return primary;
  } else if (type === 'Secondary') {
    return secondary;
  } else {
    return warning;
  }
}

export default style;
