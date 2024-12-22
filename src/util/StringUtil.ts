export class StringUtil {

    static asTag(name: string): string {
        return name.replace(' ', '_').toLowerCase();
    }

}
