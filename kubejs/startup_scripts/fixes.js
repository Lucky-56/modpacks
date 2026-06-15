ItemEvents.modification(event => {
    event.modify('spelunkery:spring_water_bucket', item => {
        item.craftingRemainder = Item.of('minecraft:bucket').item
    })
    event.modify('ratatouille:mince_meat_bucket', item => {
        item.craftingRemainder = Item.of('minecraft:bucket').item
    })
})

// const { $RegisterCapabilitiesEvent, $Capabilities$FluidHandler } = require("@package/net/neoforged/neoforge/capabilities");
// let $FluidStack = Java.loadClass("net.neoforged.neoforge.fluids.FluidStack");
// let $IFluidHandlerItem = Java.loadClass("net.neoforged.neoforge.fluids.capability.IFluidHandlerItem");

// function createPseudoBucket(stack, ctx) {
//     /**@type {import("@package/net/minecraft/world/item").$ItemStack} */
//     let container = stack;
//     let fluidStack = Fluid.of('ratatouille:mince_meat', 1000);

//     return new $IFluidHandlerItem({
//         getContainer() {
//             return container;
//         },
//         getTanks() {
//             return 1;
//         },
//         getFluidInTank(tank) {
//             return fluidStack.fluid;
//         },
//         getTankCapacity(tank) {
//             return fluidStack.getAmount();
//         },
//         isFluidValid(tank, stack) {
//             return true;
//         },
//         fill(resource, action) {
//             return 0;
//         },
//         drain(flStackOrInt, action) {
//             if (container.empty) return Fluid.empty;
//             let isFlStack = flStackOrInt instanceof $FluidStack;
//             if ((isFlStack && (
//                 flStackOrInt.empty
//                 || flStackOrInt.getAmount() < fluidStack.getAmount()
//                 || !$FluidStack.isSameFluidSameComponents(fluidStack, flStackOrInt)
//             )) || (!isFlStack && flStackOrInt < fluidStack.getAmount())) return Fluid.empty;

//             if (!action.execute()) return fluidStack;
//             let tmp = fluidStack;
//             container = Item.of("minecraft:bucket");
//             fluidStack = Fluid.empty;
//             return tmp;
//         }
//     });
// }
// function createPseudoBucket2(stack, ctx) {
//     /**@type {import("@package/net/minecraft/world/item").$ItemStack} */
//     let container = stack;
//     let fluidStack = Fluid.of('spelunkery:spring_water', 1000);

//     return new $IFluidHandlerItem({
//         getContainer() {
//             return container;
//         },
//         getTanks() {
//             return 1;
//         },
//         getFluidInTank(tank) {
//             return fluidStack.fluid;
//         },
//         getTankCapacity(tank) {
//             return fluidStack.getAmount();
//         },
//         isFluidValid(tank, stack) {
//             return true;
//         },
//         fill(resource, action) {
//             return 0;
//         },
//         drain(flStackOrInt, action) {
//             if (container.empty) return Fluid.empty;
//             let isFlStack = flStackOrInt instanceof $FluidStack;
//             if ((isFlStack && (
//                 flStackOrInt.empty
//                 || flStackOrInt.getAmount() < fluidStack.getAmount()
//                 || !$FluidStack.isSameFluidSameComponents(fluidStack, flStackOrInt)
//             )) || (!isFlStack && flStackOrInt < fluidStack.getAmount())) return Fluid.empty;

//             if (!action.execute()) return fluidStack;
//             let tmp = fluidStack;
//             container = Item.of("minecraft:bucket");
//             fluidStack = Fluid.empty;
//             return tmp;
//         }
//     });
// }

// NativeEvents.onEvent($RegisterCapabilitiesEvent, event => {
//     event.registerItem(
//         $Capabilities$FluidHandler.ITEM,
//         (stack, ctx) => createPseudoBucket(stack, ctx),
//         "ratatouille:mince_meat_bucket"
//     );
//     event.registerItem(
//         $Capabilities$FluidHandler.ITEM,
//         (stack, ctx) => createPseudoBucket2(stack, ctx),
//         "spelunkery:spring_water_bucket"
//     );
// });
