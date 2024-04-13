"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Deck } from "@/lib/types"

export const columns: ColumnDef<Deck>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Deck Name",
  },
  {
    accessorKey: "cards",
    header: "Cards",
    cell: ({ row }) => (
      <div>
        { row.original.cards.map((card, index) => (
            <div key={index}>{card.name}</div>
            ))}
      </div>
    ),
  },
]

