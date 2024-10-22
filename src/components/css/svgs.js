// css/svgs.js

export const MyIcon = () => (
    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
        <text 
            x="10" 
            y="40"  // Поднимите это значение для корректировки высоты
            font-family="Arial" 
            font-size="40" 
            fill="#1D3557"
            dominant-baseline="middle"
            text-anchor="middle"
        >
            &lt;
        </text>
        <text 
            x="60" 
            y="37" // Держим это значение прежним, чтобы буква 'a' была на одной линии
            font-family="Arial" 
            font-size="40" 
            fill="#444444"
            dominant-baseline="middle"
            text-anchor="middle"
        >
            a
        </text>
        <text 
            x="110" 
            y="40"  // Поднимите это значение для корректировки высоты
            font-family="Arial" 
            font-size="40" 
            fill="#1D3557"
            dominant-baseline="middle"
            text-anchor="middle"
        >
            &gt;
        </text>
    </svg>
);

export const AnotherIcon = () => (
    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="#1D3557" />
        <text x="70" y="55" font-family="Arial" font-size="20" fill="#ffffff">Icon</text>
    </svg>
);
