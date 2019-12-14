/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const GithubStarsLogo = props => (
  <svg width="1em" height="1em" viewBox="0 0 183 28" fill="none" {...props}>
    <path
      d="M19.55 24.258c-.644.89-1.775 1.629-3.392 2.215-1.617.586-3.398.879-5.344.879-1.898 0-3.591-.463-5.08-1.39-1.488-.925-2.654-2.232-3.498-3.919-.832-1.688-1.26-3.598-1.283-5.73v-4.395c0-2.098.404-3.979 1.213-5.643.809-1.664 1.945-2.947 3.41-3.85 1.465-.913 3.112-1.37 4.94-1.37 2.543 0 4.611.65 6.205 1.95 1.605 1.302 2.537 3.077 2.795 5.327h-.95c-.316-2.039-1.166-3.603-2.548-4.693-1.383-1.09-3.217-1.635-5.502-1.635-2.579 0-4.659.92-6.24 2.76-1.583 1.84-2.374 4.26-2.374 7.26v4.078c0 2.003.37 3.79 1.108 5.36.75 1.571 1.799 2.79 3.146 3.657 1.36.856 2.912 1.283 4.659 1.283 1.71 0 3.298-.252 4.763-.756 1.465-.503 2.473-1.113 3.024-1.828v-7.453h-7.823v-.967h8.772v8.86zM26.917 27h-.95V7.98h.95V27zM25.475 2.04c0-.27.093-.499.28-.686a.906.906 0 01.686-.3c.27 0 .498.1.686.3.2.187.299.416.299.685 0 .27-.1.498-.299.686a.933.933 0 01-.686.28.933.933 0 01-.685-.28.933.933 0 01-.281-.686zm9.808.808V7.98h4.324v.967h-4.324v13.5c0 1.348.217 2.344.65 2.989.446.644 1.184.966 2.215.966.516 0 1.143-.052 1.881-.158l.158.897c-.386.14-1.048.21-1.986.21-1.383 0-2.373-.38-2.97-1.142-.598-.773-.903-1.986-.915-3.639V8.947h-3.515V7.98h3.515V2.848h.967zm10.213 9.562c.621-1.476 1.535-2.642 2.742-3.498a6.775 6.775 0 014.008-1.283c2.04 0 3.55.58 4.535 1.74.996 1.149 1.5 2.889 1.512 5.22V27h-.95V14.555c-.011-2.04-.427-3.545-1.247-4.518-.82-.984-2.121-1.476-3.903-1.476-1.64 0-3.064.585-4.271 1.757-1.195 1.16-2.004 2.66-2.426 4.5V27h-.95V0h.95v12.41zM77.014 27v-3.076c-.563 1.055-1.383 1.892-2.461 2.514-1.078.609-2.444.914-4.096.914-2.074 0-3.633-.604-4.676-1.811-1.031-1.219-1.558-2.988-1.582-5.309V7.98h.95v12.288c.023 2.015.48 3.544 1.37 4.587.891 1.032 2.192 1.547 3.903 1.547 1.816 0 3.293-.427 4.43-1.283 1.136-.855 1.857-2.11 2.162-3.762V7.98h.967V27h-.967zm21.515-9.334c0 2.965-.638 5.32-1.916 7.066-1.277 1.747-3.017 2.62-5.22 2.62-1.43 0-2.707-.293-3.832-.88a6.766 6.766 0 01-2.655-2.478V27h-.949V0h.95v11.443c.667-1.253 1.546-2.203 2.636-2.847 1.101-.645 2.373-.967 3.814-.967 2.227 0 3.979.855 5.256 2.566 1.278 1.7 1.916 4.09 1.916 7.172v.299zm-.984-.37c0-2.73-.545-4.862-1.635-6.398-1.078-1.546-2.59-2.32-4.535-2.32-1.594 0-2.947.41-4.06 1.23-1.102.82-1.905 2.04-2.409 3.657v8.719c.504 1.347 1.307 2.39 2.408 3.128 1.114.727 2.479 1.09 4.096 1.09 1.957 0 3.469-.779 4.535-2.338 1.067-1.558 1.6-3.814 1.6-6.767z"
      fill="#4F4F4F"
    />
    <path
      d="M111.203 15.592c-2.894-.832-5.004-1.852-6.328-3.059-1.313-1.218-1.969-2.719-1.969-4.5 0-2.015.803-3.68 2.408-4.992 1.618-1.324 3.715-1.986 6.293-1.986 1.758 0 3.323.34 4.694 1.02 1.383.679 2.449 1.616 3.199 2.812a7.15 7.15 0 011.143 3.92h-3.393c0-1.547-.492-2.76-1.477-3.639-.984-.89-2.373-1.336-4.166-1.336-1.664 0-2.964.37-3.902 1.107-.926.727-1.389 1.74-1.389 3.041 0 1.043.44 1.928 1.319 2.655.89.715 2.396 1.37 4.517 1.969 2.133.597 3.797 1.26 4.993 1.986 1.207.715 2.097 1.553 2.671 2.514.586.96.879 2.091.879 3.392 0 2.074-.808 3.738-2.425 4.992-1.618 1.242-3.78 1.864-6.487 1.864-1.758 0-3.398-.334-4.922-1.002-1.523-.68-2.701-1.606-3.533-2.778-.82-1.172-1.23-2.502-1.23-3.99h3.392c0 1.547.569 2.771 1.705 3.674 1.149.89 2.678 1.336 4.588 1.336 1.781 0 3.147-.363 4.096-1.09.949-.727 1.424-1.717 1.424-2.97 0-1.255-.44-2.221-1.319-2.901-.879-.692-2.472-1.371-4.781-2.04zm17.736-12.217V7.98h3.551v2.514h-3.551V22.29c0 .762.159 1.336.475 1.723.316.375.856.562 1.617.562.375 0 .891-.07 1.547-.21V27a9.421 9.421 0 01-2.496.352c-1.453 0-2.549-.44-3.287-1.319s-1.107-2.127-1.107-3.744V10.494h-3.463V7.98h3.463V3.375h3.251zM148.047 27c-.188-.375-.34-1.043-.457-2.004-1.512 1.57-3.317 2.356-5.414 2.356-1.875 0-3.416-.528-4.623-1.582-1.196-1.067-1.793-2.415-1.793-4.043 0-1.98.75-3.516 2.25-4.606 1.511-1.101 3.633-1.652 6.363-1.652h3.164v-1.494c0-1.137-.34-2.04-1.019-2.707-.68-.68-1.682-1.02-3.006-1.02-1.16 0-2.133.293-2.918.879-.785.586-1.178 1.295-1.178 2.127h-3.27c0-.95.334-1.863 1.002-2.742.68-.89 1.594-1.594 2.743-2.11 1.16-.515 2.431-.773 3.814-.773 2.191 0 3.908.55 5.15 1.652 1.243 1.09 1.887 2.596 1.934 4.518v8.754c0 1.746.223 3.134.668 4.166V27h-3.41zm-5.397-2.479c1.02 0 1.987-.263 2.901-.79.914-.528 1.576-1.213 1.986-2.057v-3.902h-2.549c-3.984 0-5.976 1.166-5.976 3.498 0 1.02.34 1.816 1.019 2.39.68.574 1.553.861 2.619.861zm22.43-13.623a9.745 9.745 0 00-1.6-.123c-2.132 0-3.58.909-4.341 2.725V27h-3.252V7.98h3.164l.053 2.198c1.066-1.7 2.578-2.55 4.535-2.55.632 0 1.113.083 1.441.247v3.023zm14.08 11.057c0-.879-.334-1.558-1.002-2.039-.656-.492-1.81-.914-3.463-1.266-1.64-.351-2.947-.773-3.92-1.265-.961-.492-1.675-1.078-2.144-1.758-.457-.68-.686-1.488-.686-2.426 0-1.558.657-2.877 1.969-3.955 1.324-1.078 3.012-1.617 5.063-1.617 2.156 0 3.902.557 5.238 1.67 1.348 1.113 2.021 2.537 2.021 4.271h-3.269c0-.89-.381-1.658-1.143-2.302-.75-.645-1.699-.967-2.847-.967-1.184 0-2.11.258-2.778.773-.668.516-1.002 1.19-1.002 2.022 0 .785.311 1.377.932 1.775.621.399 1.74.78 3.357 1.143 1.629.363 2.948.797 3.955 1.3 1.008.504 1.752 1.114 2.233 1.829.492.703.738 1.564.738 2.584 0 1.699-.68 3.064-2.039 4.095-1.359 1.02-3.123 1.53-5.291 1.53-1.523 0-2.871-.27-4.043-.809-1.172-.54-2.092-1.29-2.76-2.25-.656-.973-.984-2.021-.984-3.146h3.252c.058 1.09.492 1.957 1.301 2.601.82.633 1.898.95 3.234.95 1.23 0 2.215-.247 2.953-.739.75-.504 1.125-1.172 1.125-2.004z"
      fill="#5253B9"
    />
  </svg>
);

export default GithubStarsLogo;