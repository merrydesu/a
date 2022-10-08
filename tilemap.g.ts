// 自動生成されたコードです。変更しないでください。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "レベル1":
            case "レベル1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006060000000000000000000000000000000000060600000000000000000000000000000000000000000000000000000000000606000000000000000000000606060000000000000000000000000000000000000000000000000000060600000000000000000000000000000000000000000000000000000202020304000005050000020304040401010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . . . . . . . . . . . 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles1,sprites.swamp.swampTile0,sprites.swamp.swampTile1,sprites.swamp.swampTile2,sprites.swamp.swampTile3,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自動生成されたコードです。変更しないでください。
