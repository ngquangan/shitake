import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { ProfileCreatedEvent } from '@shitake/microservice-profile/domain/event';

import { EventstoreService } from '@shitake/storage-eventstore/eventstore.service';

@EventsHandler(ProfileCreatedEvent)
export class ProfileCreatedHandler implements IEventHandler<ProfileCreatedEvent> {
  public constructor(private readonly eventstoreService: EventstoreService) {}

  public handle(event: ProfileCreatedEvent) {
    this.eventstoreService.createEvent(event.uuid, 'User', event.data, 'profileCreated', {});
    // TODO dispatch event to external workers
  }
}
