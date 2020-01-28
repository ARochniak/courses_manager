const initialState = {
  courses: [
    { name: 'Javascript', code: 'A12345' },
    { name: 'Python', code: 'Q12345' },
    { name: 'PHP', code: 'E12345' },
    { name: 'C++', code: 'R12345' },
    { name: 'C', code: 'T12345' },
    { name: 'C#', code: 'Y12345' },
    { name: 'Java', code: 'S12345' },
    { name: 'Kotlin', code: 'D12345' },
    { name: 'Pascal', code: 'F12345' },
    { name: 'Basic', code: 'G12345' },
    { name: 'React', code: 'H12345' },
    { name: 'Vue', code: 'Z12345' },
    { name: 'Angular', code: 'X12345' },
    { name: 'Django', code: 'C12345' },
    { name: 'Laravel', code: 'V12345' },
    { name: 'Html', code: 'B12345' },
    { name: 'Css', code: 'N12345' },
    { name: 'Bootstrap', code: 'M12345' },
    { name: 'jQuery', code: 'K12345' },
    { name: 'SQL', code: 'L12345' }
  ],
  users: [
    {
      name: 'simonjefford',
      id: 136,
      email: 'simonjefford@gmail.com',
      course: 'Javascript'
    },
    {
      name: 'josh',
      id: 137,
      email: 'josh@gmail.com',
      course: 'Javascript'
    },
    {
      name: 'stevedekorte',
      id: 138,
      email: 'stevedekorte@gmail.com',
      course: 'Javascript'
    },
    {
      name: 'leahneukirchen',
      id: 139,
      email: 'leahneukirchen@gmail.com',
      course: 'Python'
    },
    {
      name: 'cheapRoc',
      id: 140,
      email: 'cheapRoc@gmail.com',
      course: 'Python'
    },
    {
      name: 'technomancy',
      id: 141,
      email: 'technomancy@gmail.com',
      course: 'PHP'
    },
    {
      name: 'kenphused',
      id: 142,
      email: 'kenphused@gmail.com',
      course: 'PHP'
    },
    {
      name: 'rubyist',
      id: 143,
      email: 'rubyist@gmail.com',
      course: 'C++'
    },
    {
      name: 'ogc',
      id: 144,
      email: 'ogc@gmail.com',
      course: 'C'
    },
    {
      name: 'lazyatom',
      id: 145,
      email: 'lazyatom@gmail.com',
      course: 'C#'
    },
    {
      name: 'jdhuntington',
      id: 147,
      email: 'jdhuntington@gmail.com',
      course: 'SQL'
    },
    {
      name: 'nwebb',
      id: 148,
      email: 'nwebb@gmail.com',
      course: 'Java'
    },
    {
      name: 'nsutton',
      id: 149,
      email: 'nsutton@gmail.com',
      course: 'Pascal'
    },
    {
      name: 'sevenwire',
      id: 150,
      email: 'sevenwire@gmail.com',
      course: 'Kotlin'
    },
    {
      name: 'brandonarbini',
      id: 151,
      email: 'brandonarbini@gmail.com',
      course: 'Basic'
    },
    {
      name: 'al3x',
      id: 152,
      email: 'al3x@gmail.com',
      course: 'React'
    },
    {
      name: 'toolmantim',
      id: 153,
      email: 'toolmantim@gmail.com',
      course: 'Vue'
    },
    {
      name: 'nicksieger',
      id: 154,
      email: 'nicksieger@gmail.com',
      course: 'Angular'
    },
    {
      name: 'jicksta',
      id: 155,
      email: 'jicksta@gmail.com',
      course: 'Django'
    },
    {
      name: 'joshsusser',
      id: 156,
      email: 'joshsusser@gmail.com',
      course: 'Laravel'
    },
    {
      name: 'jcrosby',
      id: 157,
      email: 'jcrosby@gmail.com',
      course: 'Html'
    },
    {
      name: 'thewoolleyman',
      id: 158,
      email: 'thewoolleyman@gmail.com',
      course: 'Css'
    },
    {
      name: 'technicalpickles',
      id: 159,
      email: 'technicalpickles@gmail.com',
      course: 'Bootstrap'
    },
    {
      name: 'halbtuerke',
      id: 160,
      email: 'halbtuerke@gmail.com',
      course: 'jQuery'
    },
    {
      name: 'ryanb',
      id: 161,
      email: 'ryanb@gmail.com',
      course: 'SQL'
    },
    {
      name: 'cnix',
      id: 162,
      email: 'cnix@gmail.com',
      course: 'Python'
    },
    {
      name: 'tpitale',
      id: 163,
      email: 'tpitale@gmail.com',
      course: 'PHP'
    },
    {
      name: 'cdcarter',
      id: 164,
      email: 'cdcarter@gmail.com',
      course: 'C++'
    },
    {
      name: 'atduskgreg',
      id: 165,
      email: 'atduskgreg@gmail.com',
      course: 'C'
    },
    {
      name: 'heff',
      id: 166,
      email: 'heff@gmail.com',
      course: 'C#'
    },
    {
      name: 'entryway',
      id: 167,
      email: 'entryway@gmail.com',
      course: 'Java'
    },
    {
      name: 'aflatter',
      id: 168,
      email: 'aflatter@gmail.com',
      course: 'Pascal'
    },
    {
      name: 'schofield',
      id: 169,
      email: 'schofield@gmail.com',
      course: 'Basic'
    },
    {
      name: 'rbazinet',
      id: 170,
      email: 'rbazinet@gmail.com',
      course: 'Kotlin'
    },
    {
      name: 'tranqy',
      id: 171,
      email: 'tranqy@gmail.com',
      course: 'React'
    },
    {
      name: 'robey',
      id: 172,
      email: 'robey@gmail.com',
      course: 'Vue'
    },
    {
      name: 'bkeepers',
      id: 173,
      email: 'bkeepers@gmail.com',
      course: 'Angular'
    },
    {
      name: 'wilson',
      id: 174,
      email: 'wilson@gmail.com',
      course: 'React'
    },
    {
      name: 'tommorris',
      id: 175,
      email: 'tommorris@gmail.com',
      course: 'React'
    },
    {
      name: 'charlesroper',
      id: 176,
      email: 'charlesroper@gmail.com',
      course: 'Django'
    }
  ],
  resultsPerPage: 5,
  coursesPage: 1,
  usersPage: 1,
  nextUserId: 177
};

export default initialState;
