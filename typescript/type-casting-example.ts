abstract class Sorter {

    protected abstract compare (index: number): boolean;
    protected abstract swap (index: number): void;
    public abstract get data (): any;

    public get length (): number {
        return 0;
    };

    public sort (): any {

        for (let i = 0; i < this.length; i++)
        {
            for (let j = 0; j < this.length - i - 1; j++)
            {
                if (this.compare(j))
                {
                    this.swap(j);
                }
            }
        }

        return this.data;
    }
}

class NumberSorter extends Sorter {
    constructor(private _items: number[]) {
        super();
    }

    public get length (): number {
        return this._items.length;
    }

    public get data (): number[] {
        return this._items;
    }

    protected compare (index: number): boolean {
        return this._items[index] > this._items[index + 1]
    }

    protected swap (index: number) {
        const leftHand = this._items[index];
        this._items[index] = this._items[index + 1];
        this._items[index + 1] = leftHand;
    }
}

// const numSort = new NumberSorter([10, 30, -5, 0])
// console.log("number sorted", numSort.sort())

class StringSorter extends Sorter {
    constructor(private _items: string) {
        super();
    }

    public get length (): number {
        return this._items.length
    }

    public get data (): string {
        return this._items;
    }

    protected compare (index: number): boolean {
        return this._items[index].toLowerCase() > this._items[index + 1].toLowerCase();
    }

    protected swap (index: number) {
        const stringItems = this._items.split("")
        const leftHand = stringItems[index]
        stringItems[index] = stringItems[index + 1]
        stringItems[index + 1] = leftHand

        this._items = stringItems.join("")
    }
}

class SortAlgo {
    constructor(private items: any) {

    }

    public sort () {
        if (typeof this.items === "string")
        {
            const stringSorter = new StringSorter(this.items)
            return stringSorter.sort()
        }

        else if (this.items instanceof Array)
        {
            const numSorter = new NumberSorter(this.items)
            return numSorter.sort()
        }

        else
            return this.items

    }
}

const stringSorter = new SortAlgo("asdgdfe") // [10, 30, -5, 0]
console.log("sorted", stringSorter.sort())
