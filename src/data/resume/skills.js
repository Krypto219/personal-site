// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Blockchain'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'CodeIgniter',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Web3.js',
    competency: 5,
    category: ['Blockchain'],
  },
  {
    title: 'Solidity',
    competency: 5,
    category: ['Blockchain'],
  },
  {
    title: 'Rust',
    competency: 5,
    category: ['Blockchain'],
  },
  {
    title: 'React',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'AWS',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Laravel',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering'],
  },
  {
    title: 'Typescript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Blockchain'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'GraphQL',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'golang',
    competency: 1,
    category: ['Blockchain', 'Language'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
