enum Color {
    Red,
    Green,
    Yellow,
    Blue,
}

fn print_color(color: Color) {
    match color {
        Color::Red => println!("red"),
        Color::Green => println!("green"),
        Color::Yellow => println!("yellow"),
    }
}

fn main () {
    let red = Color::Red;
    let _green = Color::Green;
    let _yellow = Color::Yellow;
    print_color(red);
}

// rustc src/rust/enum_as_arg.rs