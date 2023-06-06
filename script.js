var content = document.getElementById('body-content');
home();

function home() {
    content.innerHTML = `<div class="flex-container">
    <div class="flex">
        <a id="googleSearch" href="https://www.google.com/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48">
                    <path d="M44.74 20H24v8.5h11.843c-.51 2.75-2.053 5.093-4.39 6.66v5.53h7.125c4.157-3.83 6.547-9.495 6.547-16.19 0-1.56-.133-3.063-.385-4.5z" fill="#4285F4">
                    </path><path d="M31.455 35.16c-1.967 1.32-4.497 2.09-7.455 2.09-5.725 0-10.582-3.862-12.318-9.067H4.34v5.697C7.96 41.07 15.403 46 24 46c5.938 0 10.938-1.95 14.58-5.31l-7.125-5.53z" fill="#34A853"></path><path d="M11 24c0-1.455.242-2.863.682-4.183v-5.7H4.34A21.929 21.929 0 0 0 2 24c0 3.555.845 6.91 2.34 9.883l7.342-5.698A13.24 13.24 0 0 1 11 24z" fill="#FBBC05"></path><path d="M24 10.75c3.233 0 6.13 1.113 8.415 3.29l6.305-6.305C34.907 4.18 29.935 2 24 2 15.402 2 7.96 6.93 4.34 14.117l7.342 5.698C13.418 14.612 18.276 10.75 24 10.75z" fill="#EA4335"></path></svg>
            </span>
            <p>G Search</p>
        </a>
    </div>
    <div class="flex">
        <a id="gmail" href="https://mail.google.com/mail/u/0/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M46 15.5V37a3 3 0 01-3 3h-7V16l10-.5z" fill="#34A853"></path><path d="M2 15.5l10 .5v24H5a3 3 0 01-3-3V15.5z" fill="#4285F4"></path><path fill="#EA4335" d="M36 10l4 10-16 12L8 20l4-10 12 9z"></path><path d="M38.8 7.9a4.5 4.5 0 017.2 3.6v4L36 23V10l2.8-2.1z" fill="#FBBC05"></path><path d="M9.2 7.9L12 10v13L2 15.5v-4a4.5 4.5 0 017.2-3.6z" fill="#C5221F"></path></svg>
            </span>
            <p>Gmail</p>
        </a>
    </div>
    <div class="flex">
        <a id="drive" href="https://drive.google.com/drive/" target="_blank">
            <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M9.92 25l13 13-13.175 4.686A4 4 0 017.833 41l-.226-.393-4.412-7.643-.093-.173a4 4 0 01-.382-2.362L9.92 25z" fill="#1967D2"></path><path d="M39.08 24l6.207 6.487A4 4 0 0144.784 33l-4.62 8a3.999 3.999 0 01-1.763 1.62L25.08 38l14-14z" fill="#EA4335"></path><path d="M28.618 5c.844 0 1.649.265 2.314.737L31 17H17l.066-11.262A3.999 3.999 0 0119.381 5h9.237z" fill="#188038"></path><path d="M32.083 7l12.701 22c.358.619.536 1.31.536 2H32.082L24 17l6.619-11.464A3.997 3.997 0 0132.083 7z" fill="#FBBC05"></path><path d="M32.082 31l6.62 11.464A3.997 3.997 0 0136.7 43H11.297a4 4 0 01-1.999-.535l6.62-11.466h16.164z" fill="#4285F4"></path><path d="M17.38 5.536L24 17l-8.082 14H2.678a4 4 0 01.514-1.96L15.924 6.989l.11-.18c.348-.53.812-.963 1.347-1.272z" fill="#34A853"></path></svg></span>
            <p>Drive</p>
        </a>
    </div>
    <div class="flex">
        <a id="Keeps" href="https://keep.google.com/u/0/" target="_blank">
            <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M28 2H11C9.35 2 8 3.35 8 5v38c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V14l-7-5-5-7z" fill="#FBBC05"></path><path fill="#F29900" d="M28 2l12 12H28z"></path><path d="M27.5 33v3h-7v-3h7zM24 19a6.5 6.5 0 013.462 12h-6.924A6.5 6.5 0 0124 19z" fill="#FFF"></path></svg></span>
            <p>Keeps</p>
        </a>
    </div>
    </div>
    <div class="flex-container">
    <div class="flex">
        <a id="calender" href="https://calendar.google.com/calendar/u/0/r" target="_blank">
            <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path fill="#FFF" d="M10 10h27v27H10z"></path><path fill="#EA4335" d="M34 43l9-9-4.5-4.5-9 9z"></path><path d="M43 14V8a3 3 0 00-3-3h-6l-4.5 4.5 9 9L43 14z" fill="#1967D2"></path><path d="M5 34v6a3 3 0 003 3h6l4.5-4.5-9-9L5 34z" fill="#188038"></path><path fill="#34A853" d="M14 43h20v-9H14z"></path><path fill="#FBBC05" d="M34 14v20h9V14z"></path><path d="M34 5v9H14v20H5V8a3 3 0 013-3h26z" fill="#4285F4"></path><text fill="#1A73E8" text-anchor="middle" font-family="Roboto-Regular,Roboto,Arial,sans-serif" font-size="16" x="24" y="29.5">26</text></svg>
            </span>
            <p>Calender</p>
        </a>
    </div>
    <div class="flex">
        <a id="news" href="https://news.google.com/home" target="_blank">
            <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M37 30.865c0 .623-.505 1.135-1.123 1.135H12.122A1.133 1.133 0 0111 30.865V7.135C11 6.512 11.505 6 12.123 6h23.754C36.495 6 37 6.512 37 7.135v23.73z" fill="#34A853"></path><path d="M16.765 29.705c-.16.598.16 1.21.712 1.358L39.48 36.98c.553.148 1.135-.22 1.295-.82l5.183-19.345c.16-.598-.16-1.21-.713-1.358L23.243 9.54c-.553-.147-1.135.22-1.295.82l-5.183 19.345z" fill="#EA4335"></path><path d="M41 23.72l1.157 7.03L41 35.07V23.72zM28.099 10.851l1.088.292.695 4.607-1.783-4.899zm-.002-.006L37 11.99v1.245l-8.902-2.39zM25.79 7.689l.058.109v.014l-14.9 5.423 13.482-6.02c.483-.226 1.07-.013 1.36.474z" fill-opacity=".1" fill="#000"></path><path d="M34.093 27.323c.212.582-.056 1.217-.59 1.415l-23.218 8.45c-.537.194-1.15-.12-1.363-.703l-6.85-18.822c-.212-.583.055-1.218.59-1.416l23.218-8.45c.538-.194 1.15.12 1.363.703l6.85 18.823z" fill="#FBBC05"></path><path d="M41 40.886C41 41.5 40.495 42 39.875 42H8.125C7.505 42 7 41.5 7 40.886V17.114C7 16.503 7.508 16 8.125 16h31.75c.62 0 1.125.503 1.125 1.114v23.772z" fill="#4285F4"></path><path d="M35.5 33c.275 0 .5.225.5.5V35c0 .275-.225.5-.5.5H26V33h9.5zM16.937 22.75c1.618 0 2.976.595 4.015 1.563l-1.712 1.712-.16-.143c-.598-.5-1.331-.757-2.142-.757-1.965 0-3.558 1.66-3.558 3.625s1.592 3.625 3.557 3.625c1.76 0 2.968-.995 3.235-2.37h-3.235V27.75h5.65c.058.365.096.745.096 1.137 0 3.428-2.28 5.863-5.745 5.863a6 6 0 010-12zM37 28c.275 0 .5.225.5.5V30c0 .275-.225.5-.5.5H26V28h11zm-1.5-5c.275 0 .5.225.5.5V25c0 .275-.225.5-.5.5H26V23h9.5z" fill="#FFF"></path></svg>
            </span>
            <p>News</p>
        </a>
    </div>
    <div class="flex">
        <a id="youtube" href="https://www.youtube.com/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M2 24c0-7.792.957-13.24 4.4-14.357C7.72 9.214 15.86 9 24 9s16.28.214 17.6.643C45.043 10.76 46 16.208 46 24c0 7.792-.957 13.24-4.4 14.357-1.32.429-9.46.643-17.6.643s-16.28-.214-17.6-.643C2.957 37.24 2 31.792 2 24z" fill="#F5221B"></path><path fill="#FFF" d="M32 24l-12 7V17z"></path></svg>
        </span>
            <p>Youtube</p>
        </a>
    </div>
    <div class="flex">
        <a id="translate" href="https://translate.google.com/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M22 10h21.009A2.999 2.999 0 0 1 46 13.007v29.986A3.003 3.003 0 0 1 43.006 46H26l-4-36z" fill="#EEE"></path><path d="M33.135 29.75l-5.212 5.154 1.404 1.404 5.173-5.173 5.173 5.173 1.404-1.404-5.212-5.154c1.731-1.98 3.077-4.327 3.693-6.75H42v-2h-6.5v-2h-2v2H27v2h10.5s-.654 2.52-3 5.27A16.623 16.623 0 0 1 32.314 25h-2.195c.718 1.701 1.767 3.32 3.016 4.75z" fill="#607D8B"></path><path fill="#4D5DBA" d="M34 38l-6-2-4.667 2L26 46z"></path><path d="M2 5.007A3.003 3.003 0 0 1 4.994 2H22l12 36H4.996A3.001 3.001 0 0 1 2 34.993V5.007z" fill="#4285F4"></path><path d="M15 25a4.5 4.5 0 1 1 2.343-8.343L19.5 14.5a7.5 7.5 0 1 0 2.85 4.5H15v3h4.244A4.502 4.502 0 0 1 15 25z" fill="#FFF"></path></svg>
            </span>
            <p>Translate</p>
        </a>
    </div>
    </div>
    <div class="flex-container">
    <div class="flex">
        <a id="bard" href="https://bard.google.com/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><defs><radialGradient id="cjgpi-0a" cx="78.3019868%" cy="55.5204781%" r="78.1132391%" fx="78.3019868%" fy="55.5204781%"><stop offset="0%" stop-color="#1BA1E3"></stop><stop offset="30.0221%" stop-color="#5489D6"></stop><stop offset="54.5524%" stop-color="#9B72CB"></stop><stop offset="82.5372%" stop-color="#D96570"></stop><stop offset="100%" stop-color="#F49C46"></stop></radialGradient><radialGradient id="cjgpi-0b" cx="-3.4084367%" cy="-54.2180222%" r="169.358416%" fx="-3.4084367%" fy="-54.2180222%"><stop offset="0%" stop-color="#1BA1E3"></stop><stop offset="30.0221%" stop-color="#5489D6"></stop><stop offset="54.5524%" stop-color="#9B72CB"></stop><stop offset="82.5372%" stop-color="#D96570"></stop><stop offset="100%" stop-color="#F49C46"></stop></radialGradient></defs><path fill="url(#cjgpi-0a)" d="M22.9795263 31.7104704 21.214431 35.7553531C20.5359373 37.3101248 18.3854946 37.3101248 17.7070009 35.7553531L15.9419056 31.7104704C14.3710646 28.1108393 11.5437088 25.2455494 8.01699551 23.6792394L3.1585314800000006 21.5215261C1.61382284 20.8354982 1.61382284 18.5872172 3.15853148 17.9011893L7.86520638 15.810808999999999C11.4826981 14.204194 14.3607381 11.2327413 15.9047618 7.510351209999999L17.6927229 3.1997716500000006C18.3562011 1.60011124 20.5652308 1.60005855 21.2287617 3.19971897L23.0167228 7.510351209999999C24.5606938 11.2327413 27.4387338 14.204194 31.0562255 15.810808999999999L35.7629531 17.9011893C37.3076091 18.5872172 37.3076091 20.8354982 35.7629531 21.5215261L30.904489100000003 23.6792921C27.3777231 25.2456021 24.5503673 28.1108393 22.9795263 31.7104704Z"></path><path fill="url(#cjgpi-0b)" d="M39.3829738 44.2332564 38.8865638 45.3718593C38.5232393 46.2051453 37.3699369 46.2051453 37.0066124 45.3718593L36.5102024 44.2332564C35.6253893 42.2038341 34.0315243 40.587841 32.0427759 39.7038181L30.5133989 39.0239545C29.6864353 38.6563625 29.6864353 37.4535877 30.5133989 37.0859956L31.9573187 36.4441188C33.9971729 35.5373882 35.6195411 33.8615961 36.4892333 31.7630494L36.9989729 30.532983200000004C37.3542364 29.6756723 38.5389398 29.6756723 38.8942033 30.532983200000004L39.4039956 31.7630494C40.2736351 33.8615961 41.8960033 35.5373882 43.9358575 36.4441188L45.3797773 37.0859956C46.2067409 37.4535877 46.2067409 38.6563625 45.3797773 39.0239545L43.8504003 39.7038181C41.8616519 40.587841 40.2677869 42.2038341 39.3829738 44.2332564Z"></path></svg>
            </span>
            <p>Bard</p>
        </a>
    </div>
    <div class="flex">
        <a id="map" href="https://www.google.com/maps/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M37.298 11.054c-2.441 8.238-5.42 11.774-8.934 10.607l.06-.072a5.696 5.696 0 00-8.785-7.254c-3.01-2.651-.028-6.192 8.947-10.621a15.044 15.044 0 018.712 7.34z" fill="#4285F4"></path><path d="M19.636 14.339a5.696 5.696 0 108.728 7.322c3.293 2.844-.397 7.226-11.071 13.144-2.43-3.087-5.1-6.068-6.737-9.687 3.298-9.365 6.325-12.959 9.08-10.78z" fill="#FBBC05"></path><path d="M12.51 8.358c3.83-1.42 6.206.573 7.126 5.98l-9.08 10.78C9.603 23.012 9 20.688 9 18a14.94 14.94 0 013.51-9.642z" fill="#EA4335"></path><path d="M39 18c0 11.535-11.108 16.377-13.386 26.155-.142.76-.811 1.74-1.584 1.756h-.06c-.773-.016-1.442-.996-1.584-1.756-.836-3.59-2.863-6.515-5.094-9.35l20.006-23.75A14.935 14.935 0 0139 18z" fill="#34A853"></path><path d="M24 3c1.6 0 3.14.25 4.586.714l-8.95 10.624-7.127-5.98A14.968 14.968 0 0124 3z" fill="#1A73E8"></path></svg>
            </span>
            <p>Map</p>
        </a>
    </div>
    <div class="flex">
        <a id="tasks" href="https://tasks.google.com/embed/list/~default" target="_blank">
            <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path fill="#0066DA" d="M31.86 8.66v12.22h10.21V8.66z"></path><path fill="#2684FC" d="M31.855 13.645a13.01 13.01 0 0 1 4.765 7.235L25.768 31.733a2.497 2.497 0 0 1-3.535 0l-7.318-7.318a2 2 0 0 1 0-2.828l3.117-3.117a2 2 0 0 1 2.828 0l3.085 3.085 7.91-7.91zm13.73-4.56-3.172-3.173a2 2 0 0 0-2.828 0l-2.75 2.75a20.072 20.072 0 0 1 5.237 6.763l3.513-3.513a1.996 1.996 0 0 0 0-2.827zM24 4a19.91 19.91 0 0 1 12.496 4.387l.339.278-4.98 4.98A12.926 12.926 0 0 0 24 11c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13c0-.921-.097-1.82-.281-2.689l-.099-.431 5.453-5.452A19.915 19.915 0 0 1 44 24c0 11.045-8.955 20-20 20S4 35.045 4 24 12.955 4 24 4z"></path></svg>
        </span>
            <p>Tasks</p>
        </a>
    </div>
    <div class="flex">
        <a id="sheets" href="https://docs.google.com/spreadsheets/u/0/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M28 2H11C9.35 2 8 3.35 8 5v38c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V14l-7-5-5-7z" fill="#34A853"></path><path fill="#188038" d="M28 2l12 12H28z"></path><path d="M14 23v14h20V23H14zm9 6h-7v-4h7v4zm0 6h-7v-4h7v4zm9 0h-7v-4h7v4zm0-6h-7v-4h7v4z" fill="#FFF"></path></svg>
            </span>
            <p>Sheets</p>
        </a>
    </div>
    </div>`;
}

function productivity() {
    content.innerHTML = `<div class="flex-container">
    <div class="flex">
        <a id="googleSearch" href="https://www.google.com/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48">
                    <path d="M44.74 20H24v8.5h11.843c-.51 2.75-2.053 5.093-4.39 6.66v5.53h7.125c4.157-3.83 6.547-9.495 6.547-16.19 0-1.56-.133-3.063-.385-4.5z" fill="#4285F4">
                    </path><path d="M31.455 35.16c-1.967 1.32-4.497 2.09-7.455 2.09-5.725 0-10.582-3.862-12.318-9.067H4.34v5.697C7.96 41.07 15.403 46 24 46c5.938 0 10.938-1.95 14.58-5.31l-7.125-5.53z" fill="#34A853"></path><path d="M11 24c0-1.455.242-2.863.682-4.183v-5.7H4.34A21.929 21.929 0 0 0 2 24c0 3.555.845 6.91 2.34 9.883l7.342-5.698A13.24 13.24 0 0 1 11 24z" fill="#FBBC05"></path><path d="M24 10.75c3.233 0 6.13 1.113 8.415 3.29l6.305-6.305C34.907 4.18 29.935 2 24 2 15.402 2 7.96 6.93 4.34 14.117l7.342 5.698C13.418 14.612 18.276 10.75 24 10.75z" fill="#EA4335"></path></svg>
            </span>
            <p>Search</p>
        </a>
    </div>
    <div class="flex">
        <a id="gmail" href="https://mail.google.com/mail/u/0/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M46 15.5V37a3 3 0 01-3 3h-7V16l10-.5z" fill="#34A853"></path><path d="M2 15.5l10 .5v24H5a3 3 0 01-3-3V15.5z" fill="#4285F4"></path><path fill="#EA4335" d="M36 10l4 10-16 12L8 20l4-10 12 9z"></path><path d="M38.8 7.9a4.5 4.5 0 017.2 3.6v4L36 23V10l2.8-2.1z" fill="#FBBC05"></path><path d="M9.2 7.9L12 10v13L2 15.5v-4a4.5 4.5 0 017.2-3.6z" fill="#C5221F"></path></svg>
            </span>
            <p>Gmail</p>
        </a>
    </div>
    <div class="flex">
        <a id="drive" href="https://drive.google.com/drive/" target="_blank">
            <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M9.92 25l13 13-13.175 4.686A4 4 0 017.833 41l-.226-.393-4.412-7.643-.093-.173a4 4 0 01-.382-2.362L9.92 25z" fill="#1967D2"></path><path d="M39.08 24l6.207 6.487A4 4 0 0144.784 33l-4.62 8a3.999 3.999 0 01-1.763 1.62L25.08 38l14-14z" fill="#EA4335"></path><path d="M28.618 5c.844 0 1.649.265 2.314.737L31 17H17l.066-11.262A3.999 3.999 0 0119.381 5h9.237z" fill="#188038"></path><path d="M32.083 7l12.701 22c.358.619.536 1.31.536 2H32.082L24 17l6.619-11.464A3.997 3.997 0 0132.083 7z" fill="#FBBC05"></path><path d="M32.082 31l6.62 11.464A3.997 3.997 0 0136.7 43H11.297a4 4 0 01-1.999-.535l6.62-11.466h16.164z" fill="#4285F4"></path><path d="M17.38 5.536L24 17l-8.082 14H2.678a4 4 0 01.514-1.96L15.924 6.989l.11-.18c.348-.53.812-.963 1.347-1.272z" fill="#34A853"></path></svg></span>
            <p>Drive</p>
        </a>
    </div>
    <div class="flex">
    <a id="tasks" href="https://tasks.google.com/embed/list/~default" target="_blank">
    <span class="input-group-text" id="basic-addon1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path fill="#0066DA" d="M31.86 8.66v12.22h10.21V8.66z"></path><path fill="#2684FC" d="M31.855 13.645a13.01 13.01 0 0 1 4.765 7.235L25.768 31.733a2.497 2.497 0 0 1-3.535 0l-7.318-7.318a2 2 0 0 1 0-2.828l3.117-3.117a2 2 0 0 1 2.828 0l3.085 3.085 7.91-7.91zm13.73-4.56-3.172-3.173a2 2 0 0 0-2.828 0l-2.75 2.75a20.072 20.072 0 0 1 5.237 6.763l3.513-3.513a1.996 1.996 0 0 0 0-2.827zM24 4a19.91 19.91 0 0 1 12.496 4.387l.339.278-4.98 4.98A12.926 12.926 0 0 0 24 11c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13c0-.921-.097-1.82-.281-2.689l-.099-.431 5.453-5.452A19.915 19.915 0 0 1 44 24c0 11.045-8.955 20-20 20S4 35.045 4 24 12.955 4 24 4z"></path></svg>
    </span>
    <p>Tasks</p>
    </a>
    </div>
    </div>
    <div class="flex-container">
    <div class="flex">
    <a id="meeting" href="https://meet.google.com/landing" target="_blank">
    <span class="input-group-text" id="basic-addon1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M11 16l2-10h21a3 3 0 013 3v15H27v-8H11z" fill="#FBBC05"></path><path fill="#4285F4" d="M3 16l10-2v20L3 32z"></path><path d="M44.671 11.784a1.5 1.5 0 01.329.937v22.558a1.5 1.5 0 01-2.437 1.171L37 32v7a3 3 0 01-3 3H13l-2-10h16v-8h6l4-8 5.563-4.45a1.5 1.5 0 012.108.234z" fill="#34A853"></path><path d="M3 32h10v10H6a3 3 0 01-3-3v-7z" fill="#1967D2"></path><path fill="#188038" d="M27 24l10-8v16z"></path><path fill="#EA4335" d="M13 6v10H3z"></path></svg>
    </span>
    <p>Meeting</p>
    </a>
    </div>
    <div class="flex">
        <a id="calender" href="https://calendar.google.com/calendar/u/0/r" target="_blank">
            <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path fill="#FFF" d="M10 10h27v27H10z"></path><path fill="#EA4335" d="M34 43l9-9-4.5-4.5-9 9z"></path><path d="M43 14V8a3 3 0 00-3-3h-6l-4.5 4.5 9 9L43 14z" fill="#1967D2"></path><path d="M5 34v6a3 3 0 003 3h6l4.5-4.5-9-9L5 34z" fill="#188038"></path><path fill="#34A853" d="M14 43h20v-9H14z"></path><path fill="#FBBC05" d="M34 14v20h9V14z"></path><path d="M34 5v9H14v20H5V8a3 3 0 013-3h26z" fill="#4285F4"></path><text fill="#1A73E8" text-anchor="middle" font-family="Roboto-Regular,Roboto,Arial,sans-serif" font-size="16" x="24" y="29.5">26</text></svg>
            </span>
            <p>Calender</p>
        </a>
    </div>
    <div class="flex">
        <a id="GPay" href="https://pay.google.com/business/console/home" target="_blank">
            <span class="input-group-text" id="basic-addon1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path fill="#34A853" d="M44 19.4250128v-6.0665312C44 9.85481949 41.1452512 7 37.6415374 7H10.3584778C6.85482458 7.03244061 4 9.8872601 4 13.3584816v6.0665312c0 .6163565.48661917 1.1028899 1.10300254 1.1028899H42.8971082c.6163576 0 1.1028918-.4865334 1.1028918-1.1028899Z"></path><path fill="#FBBC04" d="M44 24.7451824v-6.0340451c0-3.5036924-2.8547488-6.3585119-6.3584626-6.3585119H10.3584778C6.85482458 12.3526254 4 15.2074449 4 18.7111373v6.0665009c0 .6163565.48661917 1.1028899 1.10300254 1.1028899H42.8971082C43.5134658 25.848224 44 25.3615389 44 24.7451824Z"></path><path fill="#EA4335" d="M44 30.0984145v-6.0665009c0-3.5037076-2.8547488-6.3585119-6.3584626-6.3585119H10.3584778C6.85482458 17.6734017 4 20.528206 4 24.0319136v6.0665009c0 .6163565.48661917 1.1028898 1.10300254 1.1028898H42.8971082C43.5134658 31.1690002 44 30.6823152 44 30.0984145Z"></path><path fill="#4285F4" d="M29.434002 27.1786076 4 21.2742339v13.3657148c0 3.5037076 2.85482458 6.3586029 6.3584778 6.3586029h27.2830596C41.1452512 40.9985516 44 38.1436563 44 34.6399487V21.0147394l-6.0665117 4.4120144c-2.4654304 1.7841579-5.54737 2.4331218-8.4994863 1.7518538Z"></path></svg>
            </span>
            <p>Pay</p>
        </a>
    </div>
    </div>`
}

function entertainment() {
    content.innerHTML = `<div class="flex-container">
    <div class="flex">
        <a id="youtube" href="https://www.youtube.com/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M2 24c0-7.792.957-13.24 4.4-14.357C7.72 9.214 15.86 9 24 9s16.28.214 17.6.643C45.043 10.76 46 16.208 46 24c0 7.792-.957 13.24-4.4 14.357-1.32.429-9.46.643-17.6.643s-16.28-.214-17.6-.643C2.957 37.24 2 31.792 2 24z" fill="#F5221B"></path><path fill="#FFF" d="M32 24l-12 7V17z"></path></svg>
        </span>
            <p>Youtube</p>
        </a>
    </div>
    <div class="flex">
    <a id="spotify" href="https://open.spotify.com/search" target="_blank">
    <span class="input-group-text" id="basic-addon1">
    <svg style="color: blue" xmlns="http://www.w3.org/2000/svg" width="32" height="47" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" fill="blue"></path> </svg>
    </span>
    <p>Spotify</p>
    </a>
    </div>
    <div class="flex">
    <a id="tv" href="https://tv.google/" target="_blank">
    <span class="input-group-text" id="basic-addon1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M7.333 8h8L10 16v21.333L2 32V13.333A5.333 5.333 0 017.333 8z" fill="#34A853"></path><path d="M2 28a4 4 0 004 4h36l-5.333 8H7.333A5.333 5.333 0 012 34.667V28z" fill="#FBBC05"></path><path fill="#FBBC05" d="M24.4 32h18.136l-5.333 8H24.4z"></path><path d="M46.003 13.333v21.334A5.333 5.333 0 0140.669 40h-6.666a4 4 0 004-4V10.667l8 2.666z" fill="#EA4335"></path><path d="M10 16v-4a4 4 0 014-4h26.67a5.333 5.333 0 015.333 5.333V20a4 4 0 00-4-4H10z" fill="#4285F4"></path></svg>
    </span>
    <p>Google TV</p>
    </a>
    </div>
    </div>`
}

function communication() {
    content.innerHTML = `<div class="flex-container">
    <div class="flex">
        <a id="gmail" href="https://mail.google.com/mail/u/0/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M46 15.5V37a3 3 0 01-3 3h-7V16l10-.5z" fill="#34A853"></path><path d="M2 15.5l10 .5v24H5a3 3 0 01-3-3V15.5z" fill="#4285F4"></path><path fill="#EA4335" d="M36 10l4 10-16 12L8 20l4-10 12 9z"></path><path d="M38.8 7.9a4.5 4.5 0 017.2 3.6v4L36 23V10l2.8-2.1z" fill="#FBBC05"></path><path d="M9.2 7.9L12 10v13L2 15.5v-4a4.5 4.5 0 017.2-3.6z" fill="#C5221F"></path></svg>
            </span>
            <p>Gmail</p>
        </a>
    </div>
    <div class="flex">
    <a id="meeting" href="https://meet.google.com/landing" target="_blank">
    <span class="input-group-text" id="basic-addon1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M11 16l2-10h21a3 3 0 013 3v15H27v-8H11z" fill="#FBBC05"></path><path fill="#4285F4" d="M3 16l10-2v20L3 32z"></path><path d="M44.671 11.784a1.5 1.5 0 01.329.937v22.558a1.5 1.5 0 01-2.437 1.171L37 32v7a3 3 0 01-3 3H13l-2-10h16v-8h6l4-8 5.563-4.45a1.5 1.5 0 012.108.234z" fill="#34A853"></path><path d="M3 32h10v10H6a3 3 0 01-3-3v-7z" fill="#1967D2"></path><path fill="#188038" d="M27 24l10-8v16z"></path><path fill="#EA4335" d="M13 6v10H3z"></path></svg>
    </span>
    <p>Meeting</p>
    </a>
    </div>
    <div class="flex">
    <a id="contacts" href="https://contacts.google.com/" target="_blank">
    <span class="input-group-text" id="basic-addon1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path fill="#578CFF" d="M27 46h7C38.9706 46 43 41.9706 43 37v-4C43 28.0294 38.9706 24 34 24h-7v22Z"></path><path fill="#86A9FF" d="M8 46h7l6-22h-2C11.268 24 5 30.268 5 38v5C5 44.6569 6.34315 46 8 46Z"></path><path fill="#0057CC" d="M27 24C31.9706 24 36 28.0294 36 33v4C36 41.9706 31.9706 46 27 46H15C13.3431 46 12 44.6569 12 43V33C12 28.0294 16.0294 24 21 24ZM24 2C28.9705627 2 33 6.02943725 33 11 33 15.970562699999999 28.9705627 20 24 20s-9-4.0294373-9-9C15 6.02943725 19.0294373 2 24 2Z"></path></svg>
    </span>
    <p>Contacts</p>
    </a>
    </div>
    </div>`
}

function social() {
    content.innerHTML = `<div class="flex-container">
    <div class="flex">
        <a id="gmail" href="https://mail.google.com/mail/u/0/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M46 15.5V37a3 3 0 01-3 3h-7V16l10-.5z" fill="#34A853"></path><path d="M2 15.5l10 .5v24H5a3 3 0 01-3-3V15.5z" fill="#4285F4"></path><path fill="#EA4335" d="M36 10l4 10-16 12L8 20l4-10 12 9z"></path><path d="M38.8 7.9a4.5 4.5 0 017.2 3.6v4L36 23V10l2.8-2.1z" fill="#FBBC05"></path><path d="M9.2 7.9L12 10v13L2 15.5v-4a4.5 4.5 0 017.2-3.6z" fill="#C5221F"></path></svg>
            </span>
            <p>Gmail</p>
        </a>
    </div>
    <div class="flex">
    <a id="photos" href="https://photos.google.com/" target="_blank">
    <span class="input-group-text" id="basic-addon1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M13 12c6.075 0 11 4.925 11 11l1 1H3a1 1 0 01-1-1c0-6.075 4.925-11 11-11z" fill="#FBBC05"></path><path d="M36 13c0 6.075-4.925 11-11 11l-1 1V3a1 1 0 011-1c6.075 0 11 4.925 11 11z" fill="#EA4335"></path><path d="M35 36c-6.075 0-11-4.925-11-11l-1-1h22a1 1 0 011 1c0 6.075-4.925 11-11 11z" fill="#4285F4"></path><path d="M12 35c0-6.075 4.925-11 11-11h1v21a1 1 0 01-1 1c-6.075 0-11-4.925-11-11z" fill="#34A853"></path></svg>
    </span>
    <p>Photos</p>
    </a>
    </div>
    <div class="flex">
        <a id="translate" href="https://translate.google.com/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M22 10h21.009A2.999 2.999 0 0 1 46 13.007v29.986A3.003 3.003 0 0 1 43.006 46H26l-4-36z" fill="#EEE"></path><path d="M33.135 29.75l-5.212 5.154 1.404 1.404 5.173-5.173 5.173 5.173 1.404-1.404-5.212-5.154c1.731-1.98 3.077-4.327 3.693-6.75H42v-2h-6.5v-2h-2v2H27v2h10.5s-.654 2.52-3 5.27A16.623 16.623 0 0 1 32.314 25h-2.195c.718 1.701 1.767 3.32 3.016 4.75z" fill="#607D8B"></path><path fill="#4D5DBA" d="M34 38l-6-2-4.667 2L26 46z"></path><path d="M2 5.007A3.003 3.003 0 0 1 4.994 2H22l12 36H4.996A3.001 3.001 0 0 1 2 34.993V5.007z" fill="#4285F4"></path><path d="M15 25a4.5 4.5 0 1 1 2.343-8.343L19.5 14.5a7.5 7.5 0 1 0 2.85 4.5H15v3h4.244A4.502 4.502 0 0 1 15 25z" fill="#FFF"></path></svg>
            </span>
            <p>Translate</p>
        </a>
    </div>
    <div class="flex">
    <a id="meeting" href="https://meet.google.com/landing" target="_blank">
    <span class="input-group-text" id="basic-addon1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M11 16l2-10h21a3 3 0 013 3v15H27v-8H11z" fill="#FBBC05"></path><path fill="#4285F4" d="M3 16l10-2v20L3 32z"></path><path d="M44.671 11.784a1.5 1.5 0 01.329.937v22.558a1.5 1.5 0 01-2.437 1.171L37 32v7a3 3 0 01-3 3H13l-2-10h16v-8h6l4-8 5.563-4.45a1.5 1.5 0 012.108.234z" fill="#34A853"></path><path d="M3 32h10v10H6a3 3 0 01-3-3v-7z" fill="#1967D2"></path><path fill="#188038" d="M27 24l10-8v16z"></path><path fill="#EA4335" d="M13 6v10H3z"></path></svg>
    </span>
    <p>Meeting</p>
    </a>
    </div>
    </div>`
}

function office() {
    content.innerHTML = `<div class="flex-container">
    <div class="flex">
        <a id="sheets" href="https://docs.google.com/spreadsheets/u/0/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M28 2H11C9.35 2 8 3.35 8 5v38c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V14l-7-5-5-7z" fill="#34A853"></path><path fill="#188038" d="M28 2l12 12H28z"></path><path d="M14 23v14h20V23H14zm9 6h-7v-4h7v4zm0 6h-7v-4h7v4zm9 0h-7v-4h7v4zm0-6h-7v-4h7v4z" fill="#FFF"></path></svg>
            </span>
            <p>Sheets</p>
        </a>
    </div>
    <div class="flex">
    <a id="Forms" href="https://docs.google.com/forms/u/0/" target="_blank">
    <span class="input-group-text" id="basic-addon1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M28 2H11C9.35 2 8 3.35 8 5v38c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V14l-7-5-5-7z" fill="#7248B9"></path><path d="M21 35h11v-2H21v2zm0-12v2h11v-2H21zm-2.5 1a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 0118.5 24zm0 5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 0118.5 29zm0 5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 0118.5 34zm2.5-4h11v-2H21v2z" fill="#FFF"></path><path fill="#56368A" d="M28 2v12h12z"></path></svg>
    </span>
    <p>Forms</p>
    </a>
    </div>
    <div class="flex">
        <a id="Docs" href="https://docs.google.com/document/u/0/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M28 2H11C9.35 2 8 3.35 8 5v38c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V14l-7-5-5-7z" fill="#4285F4"></path><path fill="#1967D2" d="M28 2l12 12H28z"></path><path d="M28 34v3H15v-3h13zm5-6v3H15v-3h18zm0-6v3H15v-3h18z" fill="#FFF"></path></svg>
            </span>
            <p>Docs</p>
        </a>
    </div>
    <div class="flex">
    <a id="sites" href="https://sites.google.com/new" target="_blank">
    <span class="input-group-text" id="basic-addon1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M28 2H11C9.35 2 8 3.35 8 5v38c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V14l-7-5-5-7z" fill="#4758B5"></path><path fill="#354287" d="M28 2l12 12H28z"></path><path d="M28 37H15v-9h13v9zm5 0h-3v-9h3v9zm0-11H15v-3h18v3z" fill="#FFF"></path></svg>
    </span>
    <p>Sites</p>
    </a>
    </div>
    </div>
    <div class="flex-container">
    <div class="flex">
        <a id="slides" href="https://docs.google.com/presentation/u/0/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M28 2H11C9.35 2 8 3.35 8 5v38c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V14l-7-5-5-7z" fill="#FBBC05"></path><path fill="#F29900" d="M28 2l12 12H28z"></path><path d="M34 23v13H14V23h20zm-2 2H16v9h16v-9z" fill="#FFF"></path></svg>
            </span>
            <p>Slides</p>
        </a>
    </div>
    </div>
    `
}

function health() {
    content.innerHTML = `<div class="flex-container">
    <div class="flex">
        <a id="Fits" href="https://news.google.com/topics/CAAqJQgKIh9DQkFTRVFvSUwyMHZNR3QwTlRFU0JXVnVMVWRDS0FBUAE?hl=en-IN&gl=IN&ceid=IN%3Aen" target="_blank">
            <span class="input-group-text" id="basic-addon1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path fill="#34A853" d="M24.004 33.885l-5.968-5.933L13 28l.29 4.663 10.714 10.68L39.43 27.952 39 24l-4.281-.794z"></path><path d="M9.94 19.855a4.142 4.142 0 0 1-1.222-2.966c0-1.117.454-2.164 1.222-2.967a4.142 4.142 0 0 1 2.966-1.221c1.117 0 2.199.453 2.967 1.221l3.35 3.35L24 17l-.03-4.474-3.35-3.35C18.49 7.047 15.697 6 12.905 6S7.321 7.047 5.192 9.176c-4.257 4.258-4.257 11.168 0 15.39l3.35 3.351L13 28l.255-4.83-3.315-3.315z" fill="#EA4335"></path><path d="M42.78 9.176C40.652 7.047 37.86 6 35.068 6s-5.584 1.047-7.713 3.176l-8.097 8.097L19 22l5.004.019 8.097-8.062a4.142 4.142 0 0 1 2.967-1.221c1.116 0 2.198.453 2.966 1.221a4.142 4.142 0 0 1 1.222 2.967c0 1.116-.454 2.163-1.222 2.966l-3.35 3.35 4.746 4.712 3.35-3.35a10.848 10.848 0 0 0 0-15.426z" fill="#4285F4"></path><path fill="#FBBC05" d="M8.579 27.952l4.711 4.711 10.714-10.679-4.746-4.711z"></path></svg>
            </span>
            <p>Fits</p>
        </a>
    </div>
    </div>`
}

function games() {
    content.innerHTML = `<div class="flex-container">
    <div class="flex">
        <a id="quickdraw" href="https://quickdraw.withgoogle.com/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
            <img src="src/images/quickDraw.png" width="100%" height="100%">
            </span>
            <p>Quick Draw</p>
        </a>
    </div>
    <div class="flex">
        <a id="Magic Cat" href="https://www.google.com/doodles/halloween-2016" target="_blank">
            <span class="input-group-text" id="basic-addon1">
            <img src="src/images/magicCat.png" width="100%" height="100%">
            </span>
            <p>Magic Cat</p>
        </a>
    </div> 
    <div class="flex">
    <a id="Garden Gnomes" href="https://www.google.com/doodles/celebrating-garden-gnomes" target="_blank">
        <span class="input-group-text" id="basic-addon1">
        <img src="src/images/Garden.png" width="100%" height="100%">
        </span>
        <p>Gnomes</p>
    </a>
</div>
<div class="flex">
    <a id="bobaGames" href="https://www.google.com/doodles/celebrating-bubble-tea" target="_blank">
        <span class="input-group-text" id="basic-addon1">
        <img src="src/images/bobagame.png" width="100%" height="100%">
        </span>
        <p>Boba</p>
    </a>
</div>
    </div>
    <div class="flex-container">
    <div class="flex">
        <a id="cricket" href="https://doodlecricket.github.io/#/" target="_blank">
            <span class="input-group-text" id="basic-addon1">
            <img src="src/images/cricket.png" width="100%" height="100%">
            </span>
            <p>Cricket</p>
        </a>
    </div>
    <div class="flex">
        <a id="baseball" href="https://www.google.com/doodles/fourth-of-july-2019" target="_blank">
            <span class="input-group-text" id="basic-addon1">
            <img src="src/images/baseball.png" width="100%" height="100%">
            </span>
            <p>Baseball</p>
        </a>
    </div> 
    <div class="flex">
    <a id="Pacman" href="https://www.google.com/doodles/30th-anniversary-of-pac-man" target="_blank">
        <span class="input-group-text" id="basic-addon1">
        <img src="src/images/pacman.png" width="100%" height="100%">
        </span>
        <p>Pacman</p>
    </a>
</div>
<div class="flex">
    <a id="Run" href="https://www.google.com/doodles/155th-anniversary-of-the-pony-express" target="_blank">
        <span class="input-group-text" id="basic-addon1">
        <img src="src/images/Run.png" width="100%" height="100%">
        </span>
        <p>Run</p>
    </a>
</div>
</div>
<div class="flex-container">
<div class="text-center">
<a class="btn-design" href="https://sites.google.com/site/populardoodlegames/home" id="moreGames" target="_blank">More google games</a>
</div>
</div>
<br>
    `
}
const navBarsValues = ['Home', 'Productivity', 'Communication', 'Entertainment', 'Social', 'Office tools', 'Health', 'Games'];
var allNavBars = document.getElementsByClassName("nav");
for (var i = 0; i < allNavBars.length; i++) {
    allNavBars[i].addEventListener("click", function() {
        //console.log(this.innerText);
        switch (this.innerText) {
            case navBarsValues[0]:
                home();
                break;
            case navBarsValues[1]:
                productivity();
                break;
            case navBarsValues[2]:
                communication();
                break;
            case navBarsValues[3]:
                entertainment()
                break;
            case navBarsValues[4]:
                social()
                break;
            case navBarsValues[5]:
                office()
                break;
            case navBarsValues[6]:
                health()
                break;
            case navBarsValues[7]:
                games();
                break;
            default:
                console.log("invalid nav path")

        }
    });
}