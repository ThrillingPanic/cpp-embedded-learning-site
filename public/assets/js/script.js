// Toggle solution visibility
function toggleSolution(solutionId) {
    const solution = document.getElementById(solutionId);
    const button = event.target;
    
    if (solution.style.display === 'none' || solution.style.display === '') {
        solution.style.display = 'block';
        button.textContent = 'Hide Solution';
    } else {
        solution.style.display = 'none';
        button.textContent = 'Show Solution';
    }
}

// Markdown to HTML converter
function markdownToHtml(markdown) {
    let html = markdown;
    
    // Escape HTML first
    html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    // Code blocks (```...```)
    html = html.replace(/```([\s\S]*?)```/g, function(match, code) {
        return '<pre><code>' + code.trim() + '</code></pre>';
    });
    
    // Headers
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Lists
    html = html.replace(/^\s*[-*+] (.*?)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*?<\/li>)/s, function(match) {
        return '<ul>' + match + '</ul>';
    });
    
    // Paragraphs
    html = html.split('\n\n').map(function(para) {
        if (para.match(/^<h\d|^<ul|^<pre|^<li/)) {
            return para;
        }
        return '<p>' + para.trim().split('\n').join('<br>') + '</p>';
    }).join('\n');
    
    return html;
}

// Load markdown file on exercise page
document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('markdown-content');
    if (!contentDiv) return;
    
    const params = new URLSearchParams(window.location.search);
    const file = params.get('file');
    
    if (!file) {
        contentDiv.innerHTML = '<p>No exercise specified.</p>';
        return;
    }
    
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error('File not found');
            return response.text();
        })
        .then(markdown => {
            // Extract title from first heading
            const titleMatch = markdown.match(/^# (.*?)$/m);
            if (titleMatch) {
                document.getElementById('exercise-title').textContent = titleMatch[1];
                document.title = titleMatch[1];
                // Remove the title from content since we display it in header
                markdown = markdown.replace(/^# .*?$/m, '');
            }
            
            contentDiv.innerHTML = markdownToHtml(markdown);
        })
        .catch(error => {
            contentDiv.innerHTML = '<p>Error loading exercise: ' + error.message + '</p>';
        });
});