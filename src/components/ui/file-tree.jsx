"use client"

import React, {
    createContext,
    forwardRef,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { FileIcon, FolderIcon, FolderOpenIcon } from "lucide-react"
import { FlaskConical, Briefcase, Layers, TestTube } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/**
 * @typedef {Object} TreeViewElement
 * @property {string} id
 * @property {string} name
 * @property {boolean} [isSelectable]
 * @property {TreeViewElement[]} [children]
 */

/**
 * @typedef {Object} TreeContextProps
 * @property {string | undefined} selectedId
 * @property {string[] | undefined} expandedItems
 * @property {boolean} indicator
 * @property {(id: string) => void} handleExpand
 * @property {(id: string) => void} selectItem
 * @property {React.Dispatch<React.SetStateAction<string[] | undefined>>} [setExpandedItems]
 * @property {React.ReactNode} [openIcon]
 * @property {React.ReactNode} [closeIcon]
 * @property {"rtl" | "ltr"} direction
 */

const TreeContext = createContext(null)

const useTree = () => {
    const context = useContext(TreeContext)
    if (!context) {
        throw new Error("useTree must be used within a TreeProvider")
    }
    return context
}

const Tree = forwardRef(
    (
        {
            className,
            elements,
            initialSelectedId,
            initialExpandedItems,
            children,
            indicator = true,
            openIcon,
            closeIcon,
            mode = "default",
            dir,
            ...props
        },
        ref
    ) => {
        const [selectedId, setSelectedId] = useState(initialSelectedId)
        const [expandedItems, setExpandedItems] = useState(initialExpandedItems)

        const selectItem = useCallback((id) => {
            setSelectedId(id)
        }, [])

        const handleExpand = useCallback((id) => {
            setExpandedItems((prev) => {
                if (prev?.includes(id)) {
                    return prev.filter((item) => item !== id)
                }
                return [...(prev ?? []), id]
            })
        }, [])

        const expandSpecificTargetedElements = useCallback(
            (elements, selectId) => {
                if (!elements || !selectId) return
                const findParent = (currentElement, currentPath = []) => {
                    const isSelectable = currentElement.isSelectable ?? true
                    const newPath = [...currentPath, currentElement.id]
                    if (currentElement.id === selectId) {
                        if (isSelectable) {
                            setExpandedItems((prev) => [...(prev ?? []), ...newPath])
                        } else {
                            if (newPath.includes(currentElement.id)) {
                                newPath.pop()
                                setExpandedItems((prev) => [...(prev ?? []), ...newPath])
                            }
                        }
                        return
                    }
                    if (
                        isSelectable &&
                        currentElement.children &&
                        currentElement.children.length > 0
                    ) {
                        currentElement.children.forEach((child) => {
                            findParent(child, newPath)
                        })
                    }
                }
                elements.forEach((element) => {
                    findParent(element)
                })
            },
            []
        )

        useEffect(() => {
            if (initialSelectedId) {
                expandSpecificTargetedElements(elements, initialSelectedId)
            }
        }, [initialSelectedId, elements])

        const direction = dir === "rtl" ? "rtl" : "ltr"

        return (
            <TreeContext.Provider
                value={{
                    selectedId,
                    expandedItems,
                    handleExpand,
                    selectItem,
                    setExpandedItems,
                    indicator,
                    openIcon,
                    closeIcon,
                    direction,
                    mode,
                }}
            >
                <div className={cn("size-full", className)}>
                    <div
                        ref={ref}
                        className="relative h-full px-2"
                        dir={dir}
                    >
                        <AccordionPrimitive.Root
                            {...props}
                            type="multiple"
                            defaultValue={expandedItems}
                            value={expandedItems}
                            className="flex flex-col gap-1"
                            onValueChange={(value) =>
                                setExpandedItems((prev) => [...(prev ?? []), value[0]])
                            }
                            dir={dir}
                        >
                            {children}
                        </AccordionPrimitive.Root>
                    </div>
                </div>
            </TreeContext.Provider>
        )
    }
)

Tree.displayName = "Tree"

const TreeIndicator = forwardRef(({ className, ...props }, ref) => {
    const { direction } = useTree()

    return (
        <div
            dir={direction}
            ref={ref}
            className={cn(
                "absolute left-1.5 h-full w-px rounded-md py-3 bg-ultralightGray dark:bg-darkBorder duration-300 ease-in-out rtl:right-1.5",
                className
            )}
            {...props}
        />
    )
})

TreeIndicator.displayName = "TreeIndicator"

const Folder = forwardRef(
    (
        {
            className,
            element,
            value,
            isSelectable = true,
            isSelect,
            kind,
            textStyle = "normal",
            children,
            ...props
        },
        ref
    ) => {
        const {
            direction,
            handleExpand,
            expandedItems,
            indicator,
            setExpandedItems,
            openIcon,
            closeIcon,
            mode,
        } = useTree()

        const labIcons = {
            laboratory: FlaskConical,
            job: Briefcase,
            sample: Layers,
            test: TestTube,
        }

        const LabIcon = mode === "laboratory" && kind ? labIcons[kind] : null

        const iconClassName = cn(
            "size-4",
            textStyle === "strikethrough" && "text-red-600 dark:text-red-400"
        )

        return (
            <AccordionPrimitive.Item
                {...props}
                value={value}
                className="relative h-full overflow-hidden"
            >
                <AccordionPrimitive.Trigger
                    className={cn(
                        "flex items-center gap-1 rounded-md text-sm",
                        className,
                        {
                            "bg-lightContainer dark:bg-[#262626]": isSelect && isSelectable,
                            "cursor-pointer": isSelectable,
                            "cursor-not-allowed opacity-50": !isSelectable,
                        }
                    )}
                    disabled={!isSelectable}
                    onClick={() => handleExpand(value)}
                >
                    {LabIcon ? (
                        <LabIcon className={iconClassName} />
                    ) : expandedItems?.includes(value) ? (
                        openIcon ?? <FolderOpenIcon className={iconClassName} />
                    ) : (
                        closeIcon ?? <FolderIcon className={iconClassName} />
                    )}
                    <span
                        className={cn(
                            textStyle === "strikethrough" &&
                            "line-through text-red-600 dark:text-red-400"
                        )}
                    >
                        {element}
                    </span>
                </AccordionPrimitive.Trigger>
                <AccordionPrimitive.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down relative h-full overflow-hidden text-sm">
                    {element && indicator && <TreeIndicator aria-hidden="true" />}
                    <AccordionPrimitive.Root
                        dir={direction}
                        type="multiple"
                        className="ml-5 flex flex-col gap-1 py-1 rtl:mr-5"
                        defaultValue={expandedItems}
                        value={expandedItems}
                        onValueChange={(value) => {
                            setExpandedItems?.((prev) => [...(prev ?? []), value[0]])
                        }}
                    >
                        {children}
                    </AccordionPrimitive.Root>
                </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
        )
    }
)

Folder.displayName = "Folder"

const File = forwardRef(
    (
        {
            value,
            className,
            handleSelect,
            isSelectable = true,
            isSelect,
            fileIcon,
            children,
            ...props
        },
        ref
    ) => {
        const { direction, selectedId, selectItem } = useTree()
        const isSelected = isSelect ?? selectedId === value
        return (
            <button
                ref={ref}
                type="button"
                disabled={!isSelectable}
                className={cn(
                    "flex w-fit items-center gap-1 rounded-md pr-1 text-sm duration-200 ease-in-out rtl:pr-0 rtl:pl-1",
                    {
                        "bg-lightContainer dark:bg-[#262626]": isSelected && isSelectable,
                    },
                    isSelectable ? "cursor-pointer" : "cursor-not-allowed opacity-50",
                    direction === "rtl" ? "rtl" : "ltr",
                    className
                )}
                onClick={() => selectItem(value)}
                {...props}
            >
                {fileIcon ?? <FileIcon className="size-4" />}
                {children}
            </button>
        )
    }
)

File.displayName = "File"

const CollapseButton = forwardRef(
    (
        { className, elements, expandAll = false, children, ...props },
        ref
    ) => {
        const { expandedItems, setExpandedItems } = useTree()

        const expendAllTree = useCallback((elements) => {
            const expandTree = (element) => {
                const isSelectable = element.isSelectable ?? true
                if (isSelectable && element.children && element.children.length > 0) {
                    setExpandedItems?.((prev) => [...(prev ?? []), element.id])
                    element.children.forEach(expandTree)
                }
            }

            elements.forEach(expandTree)
        }, [])

        const closeAll = useCallback(() => {
            setExpandedItems?.([])
        }, [])

        useEffect(() => {
            console.log(expandAll)
            if (expandAll) {
                expendAllTree(elements)
            }
        }, [expandAll])

        return (
            <Button
                variant={"ghost"}
                className="absolute right-2 bottom-1 h-8 w-fit p-1"
                onClick={
                    expandedItems && expandedItems.length > 0
                        ? closeAll
                        : () => expendAllTree(elements)
                }
                ref={ref}
                {...props}
            >
                {children}
                <span className="sr-only">Toggle</span>
            </Button>
        )
    }
)

CollapseButton.displayName = "CollapseButton"

export { CollapseButton, File, Folder, Tree }
