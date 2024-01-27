/**
 * Loose Autocomplete
 */

// If we provide string union here then in `Comp1` component it looses size auto-complete
type IconSize = "sm" | "xs" | string;

// now if you use `IconSize1` type in `Iconprops` it will retain its auto-complete
type IconSize1 = "sm" | "xs" | Omit<string, "xs" | "sm">;

// convert `IconSize1` in generic function
type FixAutoComplete<T extends string> = T | Omit<string, T>

interface IconProps {
    size: IconSize
}

const Icon = (pros: IconProps) => <></>

const Comp1 = () => {
    return (
        <>
            <Icon size="sm" />
        </>
    )
}

