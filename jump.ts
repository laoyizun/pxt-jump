// Add your code here
//%icon="\uf135" color="#458FAA"
//namespace 跳跃 { }
namespace Jump {






    export function getJumpTime(s: Sprite) {
        return sprites.readDataNumber(s, "jumpTime")
        scene.onHitWall(s.kind(), function (s: Sprite, location) {
            if (location.y >= s.y) {
                sprites.setDataNumber(s, "jumpTime", 0)
            }
        })
    }
    //%block
    //%group="Jump"
    //%blockNamespace=Jump
    //%blockId=jump block="Sprite %s=variables_get(Sprite) jump" block.loc.zh-CN="精灵%s=variables_get(Sprite) 跳跃"
    //%weight=77
    //%inlineInputMode=inline
    export function setJump(s: Sprite) {
        let jumpTime = getJumpTime(s)
        let maxJumpTime = sprites.readDataNumber(s, "maxJumpTime")
        if (jumpTime < maxJumpTime) {
            s.vy = sprites.readDataNumber(s, "vY")
        }
        sprites.setDataNumber(s, "jumpTime", jumpTime + 1)
    }
    //%block
    //%group="Jump"
    //%blockNamespace=Jump
    //%blockId=setJumpState block="set %s=variables_get(Sprite) bounce force %vY gravity %aY jumptimes %t"
    //%block.loc.zh-Cn="设置 %s=variables_get(Sprite) 弹跳力 %vY 重力 %aY 跳跃次数 %t"
    //%weight=66
    //%vY.defl=100 aY.defl=200 t.defl=1
    //%inlineInputMode=inline
    //afterOnStart = true
    export function intJump(s: Sprite, vY: number, aY: number, t: number) {
        s.ay = aY
        sprites.setDataNumber(s, "vY", -vY)
        sprites.setDataNumber(s, "maxJumpTime", t)
        sprites.setDataNumber(s, "jumpTime", 0)
    }

}