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
        {
            find: "getPlatformUserUrl:",
            replacement: {
                match: /(?<=(?:},{|\[{)type:\i\.ABu\..*?,name:")(.*?)"(.*?icon:{.*?},.*?enabled:)(?:!(\d))(?=,?)/g,
                replace: "$1 notenabled$3\".replace(\" notenabled0\",\"\").replace(\"notenabled1\",\"(Disabled)\")$2!0"
            }
        }
    ]
});
