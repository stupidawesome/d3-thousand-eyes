interface Rect {
    top: number
    bottom: number
    left: number
    right: number
}

interface Point {
    x: number
    y: number
}

export function intersectRect(r1: Rect, r2: Rect): boolean {
    return !(r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top)
}

export function intersectPoint({x, y}: Point, rect: Rect): boolean {
    return rect.left <= x && x <= rect.right &&
        rect.top <= y && y <= rect.bottom
}
