import { PlayerRepository } from "../repositories/PlayerRepository";

export class PlayerService {
  private repository: PlayerRepository;

  constructor(repository = new PlayerRepository()) {
    this.repository = repository;
  }

  engageDiscussion() {
    // TODO
    return true;
  }

  exportQuestsState() {
    return this.repository.getPlayerStoreState();
  }

  initializePlayerState(data: any) {
    this.repository.setPlayerStoreState(data);
  }

  // player-specific actions
}
