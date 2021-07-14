package com.mriduava.anbud.controllers;

import com.mriduava.anbud.entities.Bid;
import com.mriduava.anbud.services.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class BidController {

    @Autowired
    BidService bidService;

    @GetMapping("/rest/bids")
    public List<Bid> getAllBids() {
        return bidService.getAllBids();
    }

    @GetMapping("/rest/bids/{id}")
    public Optional<Bid> getOneBid(@PathVariable Long id) {
        return bidService.getBidById(id);
    }

    @PostMapping("/rest/bids")
    public Bid postNewBid(@RequestBody Bid bid) {
        var isSaved = bidService.postNewBid(bid);
        return bidService.postNewBid(bid);
    }
}
