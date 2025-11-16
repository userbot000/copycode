// סקריפט לבניית אינדקס חיפוש מכל קבצי ה-HTML
const fs = require('fs');
const { JSDOM } = require('jsdom');

const pages = [
    { file: 'registry-cmd-guide.html', title: 'מדריך Registry CMD' },
    { file: 'git-guide.html', title: 'מדריך Git' },
    { file: 'powershell-guide.html', title: 'מדריך PowerShell' },
    { file: 'python-guide.html', title: 'מדריך Python' },
    { file: 'javascript-guide.html', title: 'מדריך JavaScript' },
    { file: 'html-css-guide.html', title: 'מדריך HTML/CSS' }
];

const searchIndex = [];

pages.forEach(page => {
    try {
        const html = fs.readFileSync(page.file, 'utf-8');
        const dom = new JSDOM(html);
        const doc = dom.window.document;

        // חילוץ פקודות
        const commands = doc.querySelectorAll('.command');
        commands.forEach((cmd, index) => {
            const commandText = cmd.textContent.trim();
            let context = '';
            let sectionId = '';

            const parent = cmd.closest('.command-group, .section');
            if (parent) {
                sectionId = parent.id || '';
                const title = parent.querySelector('.command-title, .section-title');
                const desc = cmd.previousElementSibling;

                if (title) context += title.textContent.trim() + ' - ';
                if (desc && desc.classList.contains('description')) {
                    context += desc.textContent.trim();
                }
            }

            if (commandText) {
                searchIndex.push({
                    page: page.title,
                    file: page.file,
                    command: commandText,
                    context: context,
                    type: 'command',
                    anchor: sectionId
                });
            }
        });

        // חילוץ תיאורים
        const descriptions = doc.querySelectorAll('.description, .explanation, .command-title, .section-title');
        descriptions.forEach(desc => {
            const text = desc.textContent.trim();
            if (text.length > 10 && text.length < 200) {
                let sectionId = '';
                const parent = desc.closest('.command-group, .section');
                if (parent) {
                    sectionId = parent.id || '';
                }

                searchIndex.push({
                    page: page.title,
                    file: page.file,
                    context: text,
                    type: 'description',
                    anchor: sectionId
                });
            }
        });

        console.log(`✓ סרקתי ${page.file}`);
    } catch (error) {
        console.error(`✗ שגיאה בסריקת ${page.file}:`, error.message);
    }
});

// שמירת האינדקס לקובץ
const output = `// אינדקס חיפוש אוטומטי - נוצר על ידי build-search-index.js
const SEARCH_INDEX = ${JSON.stringify(searchIndex, null, 2)};
`;

fs.writeFileSync('search-index.js', output, 'utf-8');
console.log(`\n✓ נוצר אינדקס עם ${searchIndex.length} פריטים`);
console.log('✓ הקובץ search-index.js נוצר בהצלחה!');
