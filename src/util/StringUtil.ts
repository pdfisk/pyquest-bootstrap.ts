export class StringUtil {

    static asPx(value: number): string {
        return `${value}px`;
    }

    static asTag(name: string): string {
        return name.replace(' ', '_').toLowerCase();
    }

}
