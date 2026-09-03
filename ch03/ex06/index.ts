export function slice(str: string, start?: number, end?: number) {
    const len = str.length;

    if (start === undefined || isNaN(start)) {
        start = 0;
    } else {
        start = Math.trunc(start);
    }

    end = end === undefined ? len : isNaN(end) ? 0 : Math.trunc(end);
    if (end === undefined) {
        end = len;
    } else if(isNaN(end)) {
        end = 0;
    } else {
        end = Math.trunc(end);
    }

    if (-len <= start && start < 0) {
        start = start + len;
    }

    if (start < -len) {
        start = 0;
    }

    if (start >= len) {
        return "";
    }

    if (-len <= end && end < 0) {
        end = end + len;
    }
    if (end < -len) {
        end = 0;
    }
    if (end >= len) {
        end = len;
    }

    if (end <= start) {
        return "";
    }

    console.log(start, end);
    let result = "";
    for (let i = start; i < end; i++) {
        result += str[i];
    }
    return result;
}