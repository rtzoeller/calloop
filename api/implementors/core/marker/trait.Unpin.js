(function() {var implementors = {};
implementors["calloop"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"calloop/enum.Mode.html\" title=\"enum calloop::Mode\">Mode</a>","synthetic":true,"types":["calloop::sys::Mode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.Interest.html\" title=\"struct calloop::Interest\">Interest</a>","synthetic":true,"types":["calloop::sys::Interest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.Readiness.html\" title=\"struct calloop::Readiness\">Readiness</a>","synthetic":true,"types":["calloop::sys::Readiness"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.TokenFactory.html\" title=\"struct calloop::TokenFactory\">TokenFactory</a>","synthetic":true,"types":["calloop::sys::TokenFactory"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.Token.html\" title=\"struct calloop::Token\">Token</a>","synthetic":true,"types":["calloop::sys::Token"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.Poll.html\" title=\"struct calloop::Poll\">Poll</a>","synthetic":true,"types":["calloop::sys::Poll"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"calloop/channel/enum.Event.html\" title=\"enum calloop::channel::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["calloop::sources::channel::Event"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/channel/struct.Sender.html\" title=\"struct calloop::channel::Sender\">Sender</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::channel::Sender"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/channel/struct.SyncSender.html\" title=\"struct calloop::channel::SyncSender\">SyncSender</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::channel::SyncSender"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/channel/struct.Channel.html\" title=\"struct calloop::channel::Channel\">Channel</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::channel::Channel"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/channel/struct.ChannelError.html\" title=\"struct calloop::channel::ChannelError\">ChannelError</a>","synthetic":true,"types":["calloop::sources::channel::ChannelError"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/futures/struct.Executor.html\" title=\"struct calloop::futures::Executor\">Executor</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::futures::Executor"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/futures/struct.Scheduler.html\" title=\"struct calloop::futures::Scheduler\">Scheduler</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::futures::Scheduler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/futures/struct.ExecutorDestroyed.html\" title=\"struct calloop::futures::ExecutorDestroyed\">ExecutorDestroyed</a>","synthetic":true,"types":["calloop::sources::futures::ExecutorDestroyed"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"calloop/futures/enum.ExecutorError.html\" title=\"enum calloop::futures::ExecutorError\">ExecutorError</a>","synthetic":true,"types":["calloop::sources::futures::ExecutorError"]},{"text":"impl&lt;F, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/generic/struct.Generic.html\" title=\"struct calloop::generic::Generic\">Generic</a>&lt;F, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["calloop::sources::generic::Generic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/ping/struct.PingSource.html\" title=\"struct calloop::ping::PingSource\">PingSource</a>","synthetic":true,"types":["calloop::sources::ping::PingSource"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/ping/struct.Ping.html\" title=\"struct calloop::ping::Ping\">Ping</a>","synthetic":true,"types":["calloop::sources::ping::Ping"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/ping/struct.PingError.html\" title=\"struct calloop::ping::PingError\">PingError</a>","synthetic":true,"types":["calloop::sources::ping::PingError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/signals/struct.Event.html\" title=\"struct calloop::signals::Event\">Event</a>","synthetic":true,"types":["calloop::sources::signals::Event"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/signals/struct.Signals.html\" title=\"struct calloop::signals::Signals\">Signals</a>","synthetic":true,"types":["calloop::sources::signals::Signals"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/signals/struct.SignalError.html\" title=\"struct calloop::signals::SignalError\">SignalError</a>","synthetic":true,"types":["calloop::sources::signals::SignalError"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/timer/struct.Timer.html\" title=\"struct calloop::timer::Timer\">Timer</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::timer::Timer"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/timer/struct.TimerHandle.html\" title=\"struct calloop::timer::TimerHandle\">TimerHandle</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::timer::TimerHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/timer/struct.Timeout.html\" title=\"struct calloop::timer::Timeout\">Timeout</a>","synthetic":true,"types":["calloop::sources::timer::Timeout"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/timer/struct.TimerError.html\" title=\"struct calloop::timer::TimerError\">TimerError</a>","synthetic":true,"types":["calloop::sources::timer::TimerError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"calloop/error/enum.Error.html\" title=\"enum calloop::error::Error\">Error</a>","synthetic":true,"types":["calloop::error::Error"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/error/struct.InsertError.html\" title=\"struct calloop::error::InsertError\">InsertError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["calloop::error::InsertError"]},{"text":"impl&lt;'s, 'l, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/io/struct.Readable.html\" title=\"struct calloop::io::Readable\">Readable</a>&lt;'s, 'l, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'l: 's,&nbsp;</span>","synthetic":true,"types":["calloop::io::Readable"]},{"text":"impl&lt;'s, 'l, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/io/struct.Writable.html\" title=\"struct calloop::io::Writable\">Writable</a>&lt;'s, 'l, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'l: 's,&nbsp;</span>","synthetic":true,"types":["calloop::io::Writable"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.RegistrationToken.html\" title=\"struct calloop::RegistrationToken\">RegistrationToken</a>","synthetic":true,"types":["calloop::loop_logic::RegistrationToken"]},{"text":"impl&lt;'l, Data&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.LoopHandle.html\" title=\"struct calloop::LoopHandle\">LoopHandle</a>&lt;'l, Data&gt;","synthetic":true,"types":["calloop::loop_logic::LoopHandle"]},{"text":"impl&lt;'l, Data&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.EventLoop.html\" title=\"struct calloop::EventLoop\">EventLoop</a>&lt;'l, Data&gt;","synthetic":true,"types":["calloop::loop_logic::EventLoop"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.LoopSignal.html\" title=\"struct calloop::LoopSignal\">LoopSignal</a>","synthetic":true,"types":["calloop::loop_logic::LoopSignal"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"calloop/enum.PostAction.html\" title=\"enum calloop::PostAction\">PostAction</a>","synthetic":true,"types":["calloop::sources::PostAction"]},{"text":"impl&lt;'a, S, Data&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.Dispatcher.html\" title=\"struct calloop::Dispatcher\">Dispatcher</a>&lt;'a, S, Data&gt;","synthetic":true,"types":["calloop::sources::Dispatcher"]},{"text":"impl&lt;'i&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/struct.Idle.html\" title=\"struct calloop::Idle\">Idle</a>&lt;'i&gt;","synthetic":true,"types":["calloop::sources::Idle"]},{"text":"impl&lt;'l, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/beta/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/beta/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"calloop/io/struct.Async.html\" title=\"struct calloop::io::Async\">Async</a>&lt;'l, F&gt;","synthetic":false,"types":["calloop::io::Async"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()