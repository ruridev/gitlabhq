module Boards
  class DestroyService < BaseService
    def execute(board)
      return false if parent.boards.size == 1

      board.destroy
    end
  end
end
