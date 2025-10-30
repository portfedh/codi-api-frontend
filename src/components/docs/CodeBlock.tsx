import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-expect-error - Style file doesn't have type definitions
import tomorrowNight from 'react-syntax-highlighter/dist/styles/tomorrow-night';
import { copyToClipboard } from '../../utils/clipboard';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({ code, language, title, showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(code);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-4">
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-b border-gray-200">
        <span className="text-xs sm:text-sm font-medium text-gray-700 truncate mr-2">
          {title || language}
        </span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex-shrink-0"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="hidden sm:inline">Copiado!</span>
              <span className="sm:hidden">✓</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">Copiar</span>
            </>
          )}
        </button>
      </div>

      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={tomorrowNight}
          customStyle={{
            margin: 0,
            borderRadius: 0,
            fontSize: '12px',
          }}
          showLineNumbers={showLineNumbers}
          wrapLongLines={false}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
