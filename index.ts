/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Cooper/coopeeo, Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

export default definePlugin({
    name: "AllConnectionsEnabled",
    description: "Enables all connections.",
    authors: [
        {
            name: "Cooper",
            id: 594864203102158859n
        }
    ],
    patches: [
        /*{OLD
            find: "getPlatformUserUrl:",
            replacement: {
                match: /(?<=(?:},{|\[{)type:\i\.ABu\..*?,name:")(.*?)"(.*?icon:{.*?},.*?enabled:)(?:!(\d))(?=,?)/g,
                replace: "$1 notenabled$3\".replace(\" notenabled0\",\"\").replace(\"notenabled1\",\"(Disabled)\")$2!0"
            }
        },*/
        {
            find: "getPlatformUserUrl:",
            replacement: {
                match: /(?<=(?:},{|\[{)type:\i\.\w{0,8}?\..{0,20},name:")(.{0,20})"(.{0,225}?icon:\{.{0,225}?\},.{0,150}?enabled:)(?:!(\d))(?=,?)/g,
                replace: "$1 notenabled$3\".replace(\" notenabled0\",\"\").replace(\"notenabled1\",\"(Disabled)\")$2!0"
            }
        },
    ]
});
