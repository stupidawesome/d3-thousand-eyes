import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/angular"
import { HomeComponent } from "@they/core/home/home.component"

storiesOf("My Button", module)
.add("with some emoji", () => ({
    component: HomeComponent,
    props: {
        text: "😀 😎 👍 💯",
    },
}))
.add("with some emoji and action", () => ({
    component: HomeComponent,
    props: {
        text: "😀 😎 👍 💯",
        click: action("clicked"),
    },
}))
