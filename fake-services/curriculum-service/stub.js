module.exports.getSubjectList = () => {
  return {
    subjects: [
      'Mathematics',
      'Physics',
      'Chemistry',
    ]
  };
};
module.exports.getChapterList = (subject) => {
  return {
    chapters: getChapterListBySubject(subject)
  };
};

const getChapterListBySubject = (subject) => {
  switch (subject) {
    case 'Mathematics':
      return [
        {
          'Fundamental Operations On Integers': [
            'Subtracting using the number line',
            'Addition/subtraction with more than 2 integers',
            'Additive Identity',
            'Multiplicative identity',
            'Additive Inverse',
          ]
        },
        {
          'Fractions': [
            'Understand Proper Fractions',
            'Understand Improper Fractions',
            'Conversion of improper fractions to mixed fractions',
            'Conversion of mixed fractions to improper fractions',
            'Identify whether the given fractions are equivalent fractions',
            'Find equivalent fractions for a given fraction by division',
            'Understand the meaning of the \'simplest form\' of a fraction',
            'Reduce a given fraction to its simplest form',
            'Understand Like and Unlike Fractions',
          ]
        },
        {
          'Exponents and Powers': [
            'Exponential form',
            'Definition of constant term',
            'Definition of coefficient'
          ]
        },
      ];
    case 'Physics':
      return [
        {
          'Kinematics': [
            'Motion',
            'Distance',
            'Speed',
            'Position and Displacement',
          ]
        },
        {
          'Vectors': [
            'Scalar',
            'Vectors'
          ]
        },
        {
          'Friction': [
            'Introduction To Friction',
            'Methods of Minimising Friction',
            'Methods of Increasing Friction',
            'Types of Forces',
            'More About Friction'
          ]
        }
      ];
    case 'Chemistry':
      return [
        {
          'Chemical Bonding': [
            'Ionic Bond',
            'Covalent Bond',
            'Electron Configurations'
          ]
        },
        {
          'Periodic Classification': [
            'Early History of the Periodic Table',
            'Mendeleev\'s Periodic Table'
          ]
        },
        {
          'Atomic Structure': [
            'Atom',
            'Proton',
            'Electron',
            'Neutron',
            'Orbital',
            'Valence Electrons'
          ]
        },
        {
          'Language Of Chemistry': [
            'Chemical Symbols and Formulas',
            'Balancing Chemical Equations'
          ]
        },
      ];
    default:
      return [{
        'noChapters': []
      }];
  }
};

