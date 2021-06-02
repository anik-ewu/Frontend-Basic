const nam = 'john';
const age = 31;
const job = 'web developer';
const city = 'miami';

// without template string (es5)
html = '<ul>' +
  '<li>Name: ' + nam + '</li>' +
  '<li>Age:  ' + age + '</li>' +
  '<li>Job:  ' + job + '</li>';

document.body.innerHTML = html;

// with template string (es6)

function hello() {
  return 'eehlo';
}

html = `
<ul>
  <li>Name: ${nam}</li>
  <li>Job: ${job}</li>
  <li>age: ${age} </li>
  <li>city: ${city}</li>
  <li>${5 + 5}</li>
  <li>${hello()}</li>
  <li>${age > 30 ? 'over 30' : 'Under 30'}</li>
</ul>
`;

document.body.innerHTML = html;