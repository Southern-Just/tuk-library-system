const BookCoverSvg = ({coverColor}: { coverColor: string }) => {
    return (
        <svg
            preserveAspectRatio="none"
            fill="none"
            width="100%"
            height="100%"
            viewBox="0 0 150 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
        >
            {/* Outer Book Shape */}
            <path
                d="M148 198H146V174C147 173 148 172 148 170V6C148 3 145 0 142 0H18C18 0 4 -1 0 12V184C0 200 10 199 10 199H148C149 199 150 198.5 150 197C150 196 148 198 148 198Z"
                fill="#D3E2E6"
            />
            {/* Cover Color */}
            <path
                d="M148 198H146V194H6C3 190 4 184 4 184C4 174 18 176 18 176H142C143 176 145 175 146 174C147 173 148 172 148 170V6C148 3 145 0 142 0H18C18 0 4 -1 0 12V184C0 200 10 199 10 199H148C149 199 150 198.5 150 197C150 196 148 198 148 198Z"
                fill={coverColor}
            />
            {/* Spine Adjustment */}
            <path
                d="M18 172V0C18 0 4 -1 0 12V184C0 184 0 172 18 172Z"
                fill={coverColor}
            />
            {/* Inner Rectangle */}
            <path d="M120 36H34V74H120V36Z" fill={coverColor} />
            {/* Top Double Lines with Space */}
            <path
                d="M8 18C10 17 12 16 14 16C16 16 18 16 18 16H18.5V12H18C17 12 12 12 8 14C5 15 2 17 0 19V24C1 23 2 22 3 21C5 19 6 18 8 18Z"
                fill="white"
            />
            <path
                d="M8 26C10 25 12 24 14 24C16 24 18 24 18 24H18.5V20H18C17 20 12 20 8 22C5 23 2 25 0 27V32C1 31 2 30 3 29C5 27 6 26 8 26Z"
                fill="white"
            />
            {/* Bottom Double Lines with Space */}
            <path
                d="M8 152C10 151 12 150 14 150C16 150 18 150 18 150H18.5V146H18C17 146 12 146 8 148C5 149 2 151 0 153V158C1 157 2 156 3 155C5 153 6 152 8 152Z"
                fill="white"
            />
            <path
                d="M8 160C10 159 12 158 14 158C16 158 18 158 18 158H18.5V154H18C17 154 12 154 8 156C5 157 2 159 0 161V166C1 165 2 164 3 163C5 161 6 160 8 160Z"
                fill="white"
            />
            {/* Bottom Shading */}
            <path
                d="M142 174H18C4 174 4 184 4 184C4 186 5 189 6 192C10 190 14 188 18 186C30 182 48 181 66 180C84 179 104 179 122 180C130 180 140 181 146 183V174C145 175 144 174 142 174Z"
                fill="#B8C8CD"
            />
        </svg>
    );
};

export default BookCoverSvg;
