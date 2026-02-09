export declare class ThemeManager {
    private colors;
    private theme;
    constructor(colors: Record<string, Record<string, string>>, theme: string);
    /**
     * Returns the hex code of a color associated with a key from the current theme.
     *
     * @param {string} key The color key in the theme (e.g. C, N, BACKGROUND, ...).
     * @returns {string} A color hex value.
     */
    getColor(key: string): string;
    /**
     * Sets the theme to the specified string if it exists. If it does not, this
     * does nothing.
     *
     * @param {string} theme the name of the theme to switch to
     */
    setTheme(theme: string): void;
}
//# sourceMappingURL=ThemeManager.d.ts.map